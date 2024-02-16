import logo from "./logo.svg";
import "./App.css";
import resume from "./docs/Resume_2024-v0.0.2.pdf";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href={resume} target="_blank" rel="noreferrer">
          View Resume
        </a>
      </header>
    </div>
  );
}

export default App;
