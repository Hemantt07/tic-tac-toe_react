import "./Square.css";
import React from "react";

export default function Square({ value, onSquareClick, customClass }) {
  return (
    <button
      className={`square ${customClass} flex justify-center items-center`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
