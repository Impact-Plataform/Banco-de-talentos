import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Card from './components/card.jsx'
import Header from './components/header.jsx'
import { Provider } from './context/provider'
import './index.css'
import { Characters } from './pages/characters'
import Gender from './pages/gender'
import Movies from './pages/movies'
import Specie from './pages/specie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/card/:index" element={<Card />} />
          <Route path="/gender" element={<Gender />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/specie" element={<Specie />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
