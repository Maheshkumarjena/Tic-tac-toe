import React from "react";
import { useState } from "react";
import Square from "./Square";
import "./board.css";

const Board = ({ calculateWinner }) => {
  const [square, setSquare] = useState(Array(9).fill(null));

  const [isX, setX] = useState(true);

  const onSquareClick = (i) => { 
    if (square[i] || calculateWinner(square)) {
      return "";
    }
    const nextSquare = square.slice();
    if (isX) {
      nextSquare[i] = "O";
    } else {
      nextSquare[i] = "X";
    }
    setX(!isX);
    setSquare(nextSquare);
  };

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isX ? "O" : "X");
  }

  const reset = () => {
    // console.log("reset triggered");
    setSquare(Array(9).fill(null));
  };
  

  return (
    <div>
      <div className="status">{status}</div>
    <button onClick={()=>reset()}  className="reset-button">reset</button>
      <div className="row">
        <Square squareClick={() => onSquareClick(0)} value={square[0]} />
        <Square squareClick={() => onSquareClick(1)} value={square[1]} />
        <Square squareClick={() => onSquareClick(2)} value={square[2]} />
      </div>

      <div className="row">
        <Square squareClick={() => onSquareClick(3)} value={square[3]} />

        <Square squareClick={() => onSquareClick(4)} value={square[4]} />
        <Square squareClick={() => onSquareClick(5)} value={square[5]} />
      </div>

      <div className="row">
        <Square squareClick={() => onSquareClick(6)} value={square[6]} />

        <Square squareClick={() => onSquareClick(7)} value={square[7]} />
        <Square squareClick={() => onSquareClick(8)} value={square[8]} />
      </div>
    </div>
  );
};

export default Board;
