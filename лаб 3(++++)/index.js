import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PhoneInput } from './PhoneInput';
import { SortTable } from './SortTable';

ReactDOM.render(
    <div>
        <h1>Задание 1</h1>
        <PhoneInput />
        <h1>Задание 2</h1>
        <SortTable />
    </div>,
  document.getElementById('root')
);
