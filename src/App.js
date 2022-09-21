import React from 'react';
import Marquee from './components/index.cjs.js';
// import './components/index.cjs.css'
import "./styles/globals.scss";

function App() {
  return (
    <div className='App'>
      <Marquee speed="50">
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png" alt="" />
      </Marquee>
    </div>
  );
}

export default App;
