import logo from "./logo.jpg";
import "./App.css";
import Dictionarysearch from "./Dictionarysearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to AngryKitty's dictionary!</p>
        </header>
        <Dictionarysearch />
        <footer className="App-footer">Coded by AngryKitty</footer>
      </div>
    </div>
  );
}

export default App;
