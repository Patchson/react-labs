import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Notes } from './Notes';
import { StudentInfoHandler } from './StudentInfoHandler';

ReactDOM.render(
  <React.StrictMode>
    <StudentInfoHandler />
    <br/>
    <Notes/>
  </React.StrictMode>,
  document.getElementById('root')
);