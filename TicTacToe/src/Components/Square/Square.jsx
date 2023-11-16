import './Square.css'
import React from 'react'

export default function Square({ value, onSquareClick, customClass }) {
  return (
    <button className={`square ${customClass}`} onClick={onSquareClick}>
      {value}
    </button>
  )
}
