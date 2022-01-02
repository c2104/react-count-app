import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 【ReactDom.render】
// 出力するコンポーネントと、その出力先の要素を指定してDOMを描画する
// - ReactDOM.render(出力するコンポーネント, 出力先の要素)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
