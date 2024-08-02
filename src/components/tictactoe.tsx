import React, { useState } from "react";
import "./tictactoe.css";

const InitializeBoard = () => {
  return Array(9).fill(null);
};

const Tictactoe = () => {
  const [board, setBoard] = useState(InitializeBoard());
  const [isPlayerXturn, setIsPlayerXTurn] = useState(true);

  const handleBoardClick = (boardIndex) => {
    board[boardIndex] = isPlayerXturn ? "X" : "O";
    setIsPlayerXTurn(!isPlayerXturn);
  };
  return (
    <div className="board">
      <div className="header-text">
        <span>Start the Game</span>
        <button>Reset Game</button>
      </div>
      <div className="game-board-area">
        {board.map((b, index) => {
          return (
            <button onClick={() => handleBoardClick(index)} key={index}>
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tictactoe;
