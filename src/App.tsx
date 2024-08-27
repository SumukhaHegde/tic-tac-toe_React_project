import Tictactoe from "./components/tictactoe";
import useTicTacToe from "./Hooks/useTicTacToe.js";

function App() {
  const ticTacToeFunc = useTicTacToe();
  return (
    <div>
      <Tictactoe />
      <Tictactoe />

    </div>
  );
}

export default App;
