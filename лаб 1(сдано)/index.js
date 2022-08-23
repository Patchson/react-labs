import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Excange from './Exchange';
import Chess from './Chess';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Задание 1</h1>
        <App />
      <h1>Задание 2</h1>
        <Excange />
      <h1>Задание 3</h1>
        <Chess />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

