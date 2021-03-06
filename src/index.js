import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './App';
import {TodoComponent} from './component/TodoComponent';
import MyFuncComponent from './component/MyFuncComponent';
import reportWebVitals from './reportWebVitals';
import Demo from './component/Demo';
import EffectHook from './component/EffectHook';
import EffectNew from './component/EffectNew';
ReactDOM.render(
  <React.StrictMode>
    {/* <MyApp/>
    <TodoComponent value="James" />
    <MyFuncComponent name="Mike" age={34}/> 
    <Demo/>*/}
    <MyApp />
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
