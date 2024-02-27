import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [lap, operation1] = useState(0);
  const [count, operation2] = useState(0);

  const incrementLap = () => {
    operation1(lap + 1);
    operation2(0);
  }
  
  const decrementLap = () => {
    if (lap > 0) {
      operation1(lap - 1);
    }
    operation2(0);
  }

  const incrementCount = () => {
    operation2(count + 1);
    // operation2(() => count + 1);
    // operation2((count) => count + 1);
    // () => count + 1 
    // is composed to 
    // (count) => count + 1
  }

  const decrementCount = () => {
    if (count > 0) {
      operation2(count - 1);
    }
  }

  const reset = () => {
    operation1(0);
    operation2(0);
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lap = {lap}
          <br></br>
          <button onClick={incrementLap}> UP </button>
          {" "}
          <button onClick={decrementLap}> DOWN </button>
          <br></br>
          <br></br>
          Count = {count}
          <br></br>
          <button onClick={incrementCount}> UP </button>
          {" "}
          <button onClick={decrementCount}> DOWN </button>
          <br></br>
          <br></br>
          {" "}
          <button onClick={reset}> RESET </button>
        </p>
      </header>
    </div>
  );
}

export default App;
