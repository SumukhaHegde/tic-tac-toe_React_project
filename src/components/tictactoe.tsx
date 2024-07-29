import React, { useState } from "react";
import "./tictactoe.css";

const InitializeBoard = () => {
  return Array(9).fill(null);
};

const Tictactoe = () => {
  const [board, setBoard] = useState(InitializeBoard());
  return (
    <div className="board">
      <div className="header-text">
        <span>Start the Game</span>
        <button>Reset Game</button>
      </div>

      {board.map((_, index) => {
        return <button className="game-board-area">x</button>;
      })}
    </div>
  );
};

export default Tictactoe;
