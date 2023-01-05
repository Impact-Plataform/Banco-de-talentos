import React, { useEffect, useRef, useState } from 'react';
import './index.css'
import './glitch.css'
import Select from 'react-select'
import { handleCharacters } from '../../Services';

function Sidebar({ setCharactersState, speciesList, filmsList, pagNumber }: any) {

    const genderOptions: any = [
        { value: '', label: 'Select your option' },
        { value: 'all', label: 'All' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'n/a', label: 'N/A' }
    ];

    const filterOptionsHolder = {
        gender: '',
        specie: '',
        film: '',
    };

    const [choosedOptions, setChoosedOptions] = useState(filterOptionsHolder)

    // gender = '' && specie = '' && film = ''

    useEffect(() => {
        const fetchData = async () => {
            const filter = await handleCharacters(pagNumber, setCharactersState, choosedOptions)
        };


        fetchData();

    }, [choosedOptions, pagNumber])



    function handleChange(e: any, selectName: any) {
        setChoosedOptions({
            ...choosedOptions,
            [selectName]: e.value
        })
    }

    return (

        <nav className='nav'>
            <div className="nav__logo">
                <p className='logo'>@</p>
                <p className="description">characters</p>
            </div>
            <div className="options">
                <div className="nav__option">
                    <div className="wrapper">
                        <h1 className="glitch species">GENDER</h1>
                    </div>
                    <Select
                        name='gender'
                        defaultValue={genderOptions[0]}
                        onChange={(value, actionMeta) => handleChange(value, actionMeta.name)}
                        options={genderOptions}
                        className="option__select"
                    />
                </div>
                <div className="nav__option">
                    <div className="wrapper">
                        <h1 className="glitch species">SPECIES</h1>
                    </div>
                    <Select
                        name='specie'
                        defaultValue={genderOptions[0]}
                        onChange={(value, actionMeta) => handleChange(value, actionMeta.name)}
                        options={speciesList}
                        className="option__select"
                    />
                </div>
                <div className="nav__option">
                    <div className="wrapper">
                        <h1 className="glitch films">FILMS</h1>
                    </div>
                    <Select
                        name='film'
                        defaultValue={genderOptions[0]}
                        onChange={(value, actionMeta) => handleChange(value, actionMeta.name)}
                        options={filmsList}
                        className="option__select"
                    />
                </div>
            </div>
        </nav>
    )

}

export default Sidebar