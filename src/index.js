import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SetVars } from './setVars.js';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <SetVars />
  </React.StrictMode>,
  document.getElementById('root')
);
