import React, { useState } from "react";
import "./tictactoe.css";

const InitializeBoard = () => {
  return Array(9).fill(null);
};

const Tictactoe = () => {
  const [board, setBoard] = useState(InitializeBoard());
  const [text, setText] = useState("");
  const [isPlayerXturn, setIsPlayerXTurn] = useState(true);

  const handleBoardClick = (boardIndex) => {
    isPlayerXturn ? setText("X") : setText("O");
    setIsPlayerXTurn(!isPlayerXturn);
  };
  return (
    <div className="board">
      <div className="header-text">
        <span>Start the Game</span>
        <button>Reset Game</button>
      </div>
      <div className="game-board-area">
        {board.map((_, index) => {
          return <button onClick={() => handleBoardClick(index)}>{}</button>;
        })}
      </div>
    </div>
  );
};

export default Tictactoe;
