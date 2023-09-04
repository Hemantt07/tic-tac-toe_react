import { useState } from 'react';
import Board from './components/Board';
import Footer from './components/footer';


export default function Game() {
  const [history, setHistory] = useState<Array<(string | null)[]>>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext: boolean = currentMove % 2 === 0;
  const currentSquares: (string | null)[] = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory: (string | null)[][] = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  return (
    <>
      <div className="game">
        <div className="left"></div>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          <div className="game-info right">
            <button onClick={() => jumpTo(0)}>Reset</button>
          </div>
      </div>
      <Footer />
    </>
  );
}
