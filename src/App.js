import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [fontSize, setFontSize] = useState(50);

  const handleMouseEnter = () => {
    setFontSize(prevSize => prevSize + 10);
  };

  const handleMouseLeave = () => {
    setFontSize(50);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          id="hello"
          style={{ fontSize: `${fontSize}px`, transition: 'font-size 0.3s ease' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hello World!!!
        </p>
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