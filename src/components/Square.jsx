import React from 'react'
import "./square.css";

const Square = ({value,squareClick}) => {
  return (
    <button onClick={()=>squareClick()} className='square'>{value}</button>
  )
}

export default Square