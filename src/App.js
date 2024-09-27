import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [fontSize, setFontSize] = useState(16); // 초기 폰트 크기 설정

  const handleMouseEnter = () => {
    setFontSize(prevSize => prevSize + 5); // 마우스가 들어오면 폰트 크기 증가
  };

  const handleMouseLeave = () => {
    setFontSize(16); // 마우스가 나가면 폰트 크기 초기화
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          id="hello"
          style={{ fontSize: `${fontSize}px`, transition: 'font-size 0.3s ease' }}
          onMouseEnter={handleMouseEnter} // 마우스가 들어오면 호출
          onMouseLeave={handleMouseLeave} // 마우스가 나가면 호출
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