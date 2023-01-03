import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { DarkModeProvider } from './context/DarkMode';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
