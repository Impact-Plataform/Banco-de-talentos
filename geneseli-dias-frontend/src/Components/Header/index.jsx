import { useState } from 'react';
import './style.css';
import React from 'react';
import Logo from '../../assets/logo.starwars.png';

export default function Header () {

    const [searchValue, setSearchValue] = useState<string> ('');

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

        </div>

    )
}