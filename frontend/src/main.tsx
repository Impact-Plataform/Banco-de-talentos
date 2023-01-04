import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { CharactersProvider } from './providers/Characters';
import { DarkModeProvider } from './providers/DarkMode';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <CharactersProvider>
          <App />
        </CharactersProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
