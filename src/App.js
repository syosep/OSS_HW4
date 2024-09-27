import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [fontSize, setFontSize] = useState(16);

  const handleMouseEnter = () => {
    setFontSize(prevSize => prevSize +5);
  };

  const handleMouseLeave = () => {
    setFontSize(16);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="hello">Hello World!!!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
