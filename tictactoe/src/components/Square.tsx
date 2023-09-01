import React from 'react';

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  customClass: string;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick, customClass }) => {
  return (
    <button className={`square ${customClass}`} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
