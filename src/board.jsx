import React from "react";

import Square from "./square";
function calculateWinner(square) {
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
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}
export default function Board({ xIsNext, square, onPlay }) {
  const winner = calculateWinner(square);
  let status;

  if (winner) {
    status = winner + " wins";
  } else {
    status = (xIsNext ? "x" : "o") + " turn";
    // checking if the game is over
    let gameOver = 1;
    for (let i = 0; i < 9; i++) {
      if (!square[i]) {
        gameOver *= 0;
      }
    }
    if (gameOver) {
      status = "draw";
    }
  }

  function handClicked(num) {
    if (square[num] || calculateWinner(square)) {
      return;
    }
    const newSquare = square.slice();
    if (xIsNext) {
      newSquare[num] = "X";
    } else {
      newSquare[num] = "O";
    }
    onPlay(newSquare);
  }
  return (
    <div className="game-board">
      <div className="status">{status}</div>
      <div className="Square-row">
        <Square value={square[0]} onClick={() => handClicked(0)} />
        <Square value={square[1]} onClick={() => handClicked(1)} />
        <Square value={square[2]} onClick={() => handClicked(2)} />
      </div>
      <div className="Square-row">
        <Square value={square[3]} onClick={() => handClicked(3)} />
        <Square value={square[4]} onClick={() => handClicked(4)} />
        <Square value={square[5]} onClick={() => handClicked(5)} />
      </div>
      <div className="Square-row">
        <Square value={square[6]} onClick={() => handClicked(6)} />
        <Square value={square[7]} onClick={() => handClicked(7)} />
        <Square value={square[8]} onClick={() => handClicked(8)} />
      </div>
    </div>
  );
}
