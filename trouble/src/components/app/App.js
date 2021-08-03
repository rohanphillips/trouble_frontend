
import './App.css';
import GameController from '../control/GameController';
import Board from '../board/Board'

function App() {
  return (
    <div className="App">
      <header>
        Trouble
      </header>
      <table>
        <tr>
          <th>
            <GameController/>
          </th>
          <td>
            <Board/>
          </td>
        </tr>
      </table>      
    </div>
  );
}

export default App;
