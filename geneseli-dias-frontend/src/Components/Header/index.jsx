import { useState } from 'react';
import './style.css';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Logo from '../../assets/logo.starwars.png';


export default function Header () {

    const [searchValue, setSearchValue] = useState ('');

    return (
        <div className='header'>
            <img className='header-logo' src={Logo} />

            <div className='header-title'>
                <h1>UNIVERSE</h1>
            </div>

            <div className='search'>
                <input onChange={(e) => setSearchValue(e.target.value)} 
                className='search-input' 
                type='text' 
                placeholder ='Procure seu personagem' /> 
                
            </div>

            <button className='search-button' type='button'>
                <FaSearch />
            </button>

            <div className='selector'>
            <select className='genre' name="genre" id="genre">
                <option>Gênero</option>
                <option value="all">Todos</option>
                <option value="female">Feminino</option>
                <option value="male">Masculino</option>
                <option value="hermaphrodite">Hermafrodita</option>
                <option value="none">Nenhum Gênero</option>
            </select>

            <select className='films' name="films" id="films">
                <option>Filmes</option>
                <option value="film-1">A New Hope</option>
                <option value="film-2">The Empire Strikes Back</option>
                <option value="film-3">Return of the Jedi</option>
                <option value="film-4">The Phantom Menace</option>
                <option value="film-5">Attack of the Clones</option>
                <option value="film-6">Revenge of the Sith</option>
            </select>

            <select className='species' name="species" id="species">
                <option>Espécies</option>
                <option value="human">Humano</option>
                <option value="droid">Droid</option>
                <option value="wookie">Wookie</option>
                <option value="rodian">Rodian</option>
                <option value="yoda's-species">Yoda's Species</option>
                <option value="tradoshan">Tradoshan</option>
                <option value="mon-calamari">Mon Calamari</option>
                <option value="ewok">Ewok</option>
                <option value="sullustan">Sullustan</option>
                <option value="neimodian">Neimodian</option>
                <option value="gungan">Gungan</option>
                <option value="toydarian">Toydarian</option>
                <option value="dug">Dug</option>
                <option value="twilek">Twi'lek</option>
                <option value="aleena">Aleena</option>
            </select>

           
            </div>
                           

        </div>

    )
}