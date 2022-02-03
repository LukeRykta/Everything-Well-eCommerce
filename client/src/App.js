import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Danny is a G.O.A.T.</code>
        </p>
        <a
          className="App-link"
          href="https://pbs.twimg.com/media/CaeaiplUUAE0m0r.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Extreme Programming
        </a>
      </header>
    </div>
  );
}

export default App;
