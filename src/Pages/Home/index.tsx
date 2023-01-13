import { useEffect, useId, useState } from 'react';
import CharacterCard from '../../Components/CharacterCard';
import { getTotalPages } from '../../Services';
import { CharacterTYPE } from '../../Types';
import './index.css';
import Sidebar from '../../Components/SideBar';
import { getOptions } from '../../Services/getSelectOptions';
import Loading from '../../Components/Loading';
import searchNotFound from '../../assets/filterNotFound.gif'
import Background from '../../Components/Background';

function Home() {
    const [charactersList, setCharactersList] = useState<string | CharacterTYPE[]>([]);

    const [totalPages, setTotalPages] = useState<number>(0);

    const [page, setPage] = useState<number>(1);

    const [speciesList, setSpeciesList] = useState<CharacterTYPE[]>([]);

    const [filmsList, setFilmsList] = useState<CharacterTYPE[]>([]);

    const [searchValue, setSearchValue] = useState<string>('');
    


    useEffect(() => {
        const fetchSelectOptionsAndPageNumber = async () => {
            const pages = getTotalPages(setTotalPages, totalPages);
            const species = await getOptions(setSpeciesList, 'https://swapi.py4e.com/api/species/');
            const films = await getOptions(setFilmsList, 'https://swapi.py4e.com/api/films/')
        };

        fetchSelectOptionsAndPageNumber();
    }, []);

    
    function renderPagesBar() {
        let elements = [];

        for (let i = 1; i <= totalPages; i++) {
            elements.push(
                <h3 className={`page__container ${page === i ? 'page__active' : ''}`} page-key={i} onClick={renderKey}>{i}</h3>
            );
        }
        return elements;
    }

    function renderKey(event: any) {
        if (page === parseInt(event.target.getAttribute('page-key'))) return 
        setPage(parseInt(event.target.getAttribute('page-key')))
        setCharactersList([]);
    }

    function renderContent() {
        if (charactersList.length > 0 && typeof charactersList != 'string') {
            return (
                charactersList.map((item: CharacterTYPE) => {
                    return (
                        <CharacterCard character={item} />
                    )
                }))
        } else if (charactersList.length === 0) {
            return <Loading />
        } else if (typeof charactersList === 'string' && charactersList === 'Character not found') {
            return (
                <div className='search__notfound'>
                    <h1>Nothing was found</h1>
                    <img src={searchNotFound} alt="A stormtrooper saying: Nothing was found"/>
                </div>)
        }

    }
    if (totalPages <= 0) {
        return <Loading />
    }

    return (
        <div className="main__content">
            <Background overlayEnabled={true} />
            <div className='main__cards'>
                <Sidebar
                    pagNumber={page}
                    setCharactersState={setCharactersList}
                    speciesList={speciesList}
                    filmsList={filmsList}
                    searchValue={searchValue}
                />
                <div className="card__content">
                    
                    <div className="search__card">
                        <input onChange={(e) => setSearchValue(e.target.value)} className='input__search' type="text" placeholder='Search for a character' />
                    </div>
                    <div className="card__grid">
                        {renderContent()}
                    </div>
                    <div className='page__box'>
                        {renderPagesBar()}
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home;