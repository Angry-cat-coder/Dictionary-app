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
        <Dictionarysearch defaultKeyword="winter" />
        <footer className="App-footer">
          <a
            href="https://extraordinary-beignet-690091.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coded by AngryKitty
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Angry-cat-coder/Dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://hilarious-profiterole-c9ae2a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
