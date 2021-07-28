
import './App.css';
import Board from '../board/Board'

function App() {
  return (
    <div className="App">
      <header>
        Trouble
      </header>
      <Board position={1}/>
    </div>
  );
}

export default App;
