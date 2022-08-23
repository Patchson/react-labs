import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Clock } from './Clock';
import Job from './Job';


function App() {
    return (
        <div>
          <h1>Задание 1</h1>
            <Clock format='24' timezone='+3' />
            <Clock format='12' timezone='-5' />
          <h1>Задание 2</h1>
            <Job/>
        </div>
    ); 
}

export default App;