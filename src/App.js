import './App.css';
import Board from './components/board'; 
function App() {
  return(
    <div className="app">
      <h1 style={{textAlign: "center"}}>Tic Tac Toe</h1>
      <Board />
    </div>
  )
}

export default App;
