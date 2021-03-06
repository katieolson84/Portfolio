import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Reset } from 'styled-reset';

ReactDOM.render(
  <Router>
    <Reset />
    <App />
  </Router>,
  document.getElementById('root')
);

