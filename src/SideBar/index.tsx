import React, { useEffect, useState } from 'react';
import './index.css'
import './glitch.css'
import Select from 'react-select'


function Sidebar({speciesList, filmsList} :any) {

    const genderOptions: any = [
        { value: 'all', label: 'All' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ]; 

    const [selectedOption, setSelectedOption] = useState<any>(genderOptions[0]);

    const [selectedSpecie, setSelectedSpecie] = useState<any>(speciesList[0]);

    const [selectedFilm, setSelectedFilm] = useState<any>(filmsList[0])

    useEffect(() => {
        
    }, [])

    return (

        <nav className='nav'>
            <div className="nav__logo">
                <p className='logo'>@</p>
                <p className="description">characters</p>
            </div>
            
            <div className="nav__option">
            <div className="wrapper">
                <h1 className="glitch gender">GENDER</h1>
            </div>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={genderOptions}
                    className="option__select"
                />
            </div>
            <div className="nav__option">
                <div className="wrapper">
                    <h1 className="glitch species">SPECIES</h1>
                </div>
                    <Select
                        defaultValue={selectedSpecie}
                        onChange={setSelectedSpecie}
                        options={speciesList}
                        className="option__select"
                    />
            </div>
            <div className="nav__option">
                <div className="wrapper">
                    <h1 className="glitch films">FILMS</h1>
                </div>
                    <Select
                        defaultValue={selectedFilm}
                        onChange={setSelectedFilm}
                        options={filmsList}
                        className="option__select"
                    />
            </div>
        </nav>
    )

}

export default Sidebar