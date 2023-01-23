import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Especies from '../pages/Especies/Especies'
import Filmes from '../pages/Filmes/Filmes'
import Home from '../pages/Home/Home'
import Naves from '../pages/Naves/Naves'
import Personagens from '../pages/Personagens/Personagens'
import Planetas from '../pages/Planetas/Planetas'
import Veiculos from '../pages/Veiculos/Veiculos'

const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/filmes' element={<Filmes/>}/>
        <Route path='/especies' element={<Especies/>}/>
        <Route path='/personagens' element={<Personagens/>}/>
        <Route path='/naves' element={<Naves/>}/>
        <Route path='/veiculos' element={<Veiculos/>}/>
        <Route path='/planetas' element={<Planetas/>}/>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes