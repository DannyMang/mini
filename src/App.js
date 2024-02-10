import { useState } from 'react';
import logo from './dudububu.gif';
import './App.css';

function App() {
  const [yesSize, setYesSize] = useState(30);
  const [noSize, setNoSize] = useState(30);
  const [yesPosition, setYesPosition] = useState({ x: 50, y: 50 });
  const [noPosition, setNoPosition] = useState({ x: 200, y: 50 });
  const [yesText, setYesText] = useState("Yes");

  const increaseYesSize = () => {
    setNoSize(noSize - 5);
    setYesText("Yippee!");
  };

  const moveNoButton = () => {
    const newX = Math.random() * (window.innerWidth - 200);
    const newY = Math.random() * (window.innerHeight - 50);
    setNoPosition({ x: newX, y: newY });
    setYesSize(yesSize + 5); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Be my valentine :3?
        </p>
        <div className="button-container">
          <button className="yes-button" style={{ fontSize: yesSize, position: 'absolute', left: yesPosition.x, top: yesPosition.y }} onClick={increaseYesSize}>
            {yesText}
          </button>
          <button className="no-button" style={{ fontSize: noSize, position: 'absolute', left: noPosition.x, top: noPosition.y }} onClick={moveNoButton}>
            No
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
