const useTicTacToe = () => {
  const [board, setBoard] = useState(InitializeBoard());
  const [isPlayerXturn, setIsPlayerXTurn] = useState(true);

  const handleBoardClick = (boardIndex) => {
    board[boardIndex] = isPlayerXturn ? "X" : "O";
    setIsPlayerXTurn(!isPlayerXturn);
  };
  const calculateWinner = () => {};

  const handleBoardButtonClick = () => {};

  const setGameBoard = () => {
    setBoard(board);
  };
};

export default useTicTacToe;
