import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello name="John"/>
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
