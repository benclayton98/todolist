import './App.css';
import List from './list'

let list = new List();

function App() {
  return (
    <div className="App">
        <p id="title">
          Yet another to do List!
        </p>
        <List />
    </div>
  );
}

export default App;
