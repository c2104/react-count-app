import React, { useState } from 'react'
import './App.css';
import Button from './Button';

const App = () => {
  // 【useState】
  // Reactのstate機能を関数コンポーネントに追加する
  // 通常の変数と違い、state変数は関数が終了してもReactによって保持される
  // - const [state変数, state変数を更新する関数] = useState(state変数の初期値)
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='button-area'>
        <Button
          btn_click = {() => { setCount(count - 1) }}
          btn_txt = "-"
        />
        <span className='count'>{count}</span>
        <Button
          btn_click = {() => { setCount(count + 1) }}
          btn_txt = "+"
        />
      </div>
    </div>
  );
};

export default App;
