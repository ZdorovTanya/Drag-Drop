import "./App.css";
import Board from "./component/Board";
import Card from "./component/Card";

function App() {
  return (
    <div className="App">
      <Board>
        <Card id="card-1" className="card" draggable="true">
          <p>Card one</p>
        </Card>
      </Board>
    </div>
  );
}

export default App;
