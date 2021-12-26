import React, { useState } from 'react'
import './App.css';
import Button from './Button';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='button-area'>
        <Button
          btn_click = {() => { setCount(count - 1) }}
          btn_txt="-"
        />
        <span className='count'>{count}</span>
        <Button
          btn_click = {() => { setCount(count + 1) }}
          btn_txt="+"
        />
      </div>
    </div>
  );
}

export default App;
