import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Global.css"
import { Home } from './pages/home/Index'
import { Details } from './pages/Details/Index'
import { Characters } from './pages/Characters/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/characters' element={<Characters />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  </BrowserRouter>
)
