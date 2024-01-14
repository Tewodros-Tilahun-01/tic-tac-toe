import React from "react";
import { useState } from "react";
import Board from "./board";
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const currentSquares = history[history.length - 1];
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <Board square={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
  );
};
export default Game;
