import React from 'react';
import Marquee from './components/marquee';

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
