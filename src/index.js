import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import ReactDOM from 'react-dom'; > ReactDOM.render는 react 18에서 더 이상 지원되지 않음.
import * as ReactDOM from 'react-dom/client';

/* 초기 ReactDOM 소스코드
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

/* Stack Flow에서 내놓은 오류 해결 방법
https://stackoverflow.com/questions/71913692/module-not-found-error-cant-resolve-react-dom-client */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>);
/*- React 18에서 지원하지 않는 문법
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);  */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
