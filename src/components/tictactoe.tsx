import React, { useState } from "react";
import "./tictactoe.css";

const InitializeBoard = () => {
  return Array(9).fill(null);
};

const Tictactoe = () => {
  return (
    <div className="board">
      <div className="header-text">
        <span>Start the Game</span>
        <button>Reset Game</button>
      </div>
      <div className="game-board-area">
        {board.map((b, index) => {
          return (
            <button
              onClick={() => handleBoardClick(index)}
              key={index}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tictactoe;
