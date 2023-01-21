import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { CharactersProvider } from './providers/Characters';
import { DarkModeProvider } from './providers/DarkMode';
import { FilmsProvider } from './providers/Films';
import { SpeciesProvider } from './providers/Species';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <CharactersProvider>
          <FilmsProvider>
            <SpeciesProvider>
              <App />
            </SpeciesProvider>
          </FilmsProvider>
        </CharactersProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
