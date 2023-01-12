import { useEffect, useState } from 'react';
import './index.css'
import './glitch.css'
import Select from 'react-select'
import { handleCharacters, promisesDealer } from '../../Services';
import { CharacterTYPE, FilterOptions } from '../../Types';

function Sidebar({ setCharactersState, speciesList, filmsList, pagNumber, searchValue }: any) {

    let characterArray: CharacterTYPE[] = [];
    const genderOptions: { value: string; label: string }[]  = [
        { value: '', label: 'Select your option' },
        { value: 'all', label: 'All' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'hermaphrodite', label: 'Hermaphrodite' },
        { value: 'none', label: 'None' },
        { value: 'n/a', label: 'N/A' }
    ];


    const filterOptionsHolder:FilterOptions = {
        gender: '',
        species: '',
        film: '',
    };

    const [choosedOptions, setChoosedOptions] = useState<FilterOptions>(filterOptionsHolder)


    useEffect(() => {
        const fetchData = async () => {
            let personArray:void = await handleCharacters(pagNumber, choosedOptions, characterArray, searchValue)
            let item:void = await promisesDealer(characterArray, setCharactersState, choosedOptions, searchValue);
        };

        fetchData();

    }, [choosedOptions, searchValue, pagNumber])

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
                        name='species'
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