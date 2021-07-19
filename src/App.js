import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  const clickEvent = () => {
    let counter = count + 1;
    setCount(counter);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clickEvent}>Click me</button>
    </div>
  );
}
