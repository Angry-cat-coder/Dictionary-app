import logo from "./logo.jpg";
import "./App.css";
import Dictionarysearch from "./Dictionarysearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="Welcome">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              {" "}
              <em>Welcome to AngryKitty's dictionary!</em>
            </h1>
          </div>{" "}
          <h4>What word do you want to look up ? </h4>
        </header>{" "}
        <Dictionarysearch />
        <footer className="App-footer">Coded by AngryKitty</footer>
      </div>
    </div>
  );
}

export default App;
