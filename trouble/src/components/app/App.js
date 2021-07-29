
import './App.css';
import Board from '../board/Board'

function App() {
  return (
    <div className="App">
      <header>
        Trouble
      </header>
      <table>
        <th>
          <tr>
            <td>
              Console
            </td>
            <td>
              <Board/>
            </td>
          </tr>
        </th>
      </table>      
    </div>
  );
}

export default App;
