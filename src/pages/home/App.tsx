import React from 'react';
import { Counter } from '../../components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Redux Toolkit implementation sample.
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
