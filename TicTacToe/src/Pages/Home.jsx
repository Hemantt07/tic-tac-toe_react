import React, { useState } from "react";
import Topbar from "../Components/Topbar/Topbar";
import Footer from "../Components/Footer/Footer";
import Board from "../Components/Board/Board";

export default function Home() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  return (
    <>
      <div className="main">
        <Topbar />
        <div className="game">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
          <div className="game-info right">
            <button onClick={() => jumpTo(0)}>Reset</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
