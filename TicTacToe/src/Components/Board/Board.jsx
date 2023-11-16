import Square from '../Square/Square';
import './Board.css'
import React from 'react'

export default function Board({ xIsNext, squares, onPlay }) {
    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
    
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      };
    
      const handleClick = (i) => {
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
          nextSquares[i] = 'X';
        } else {
          nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
      };
    
      const winner = calculateWinner(squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
      }
    
  return (
    <div className="game-board center">
        {winner ? <h1 className='winner'>Winner is {winner} &#129311;&#127996;</h1> : ''}
        <div className="status">{status}</div>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} customClass={`0`} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} customClass={`1`} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} customClass={`2`} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} customClass={`3`} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} customClass={`4`} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} customClass={`5`} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} customClass={`6`} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} customClass={`7`} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} customClass={`8`} />
          </div>
    </div>
  )
}
