import React, { useEffect, useRef, useState } from 'react';
import CharacterCard from '../CharacterCard';
import { getCharacters, getTotalPages } from '../Services';
import { CharacterTYPE } from '../Types';
import loadingGif from '../assets/loading.gif';
import videoBackground from '../assets/background.mp4';
import './index.css';
import Sidebar from '../SideBar';
import { getData } from '../Services/fetchSpecies';
import Loading from '../Loading';

function Home() {
    const [charactersList, setCharactersList] = useState<CharacterTYPE[]>([]);

    const [totalPages, setTotalPages] = useState<number>(0);

    const [page, setPage] = useState<number>(1);

    const [isPageLoaded, setPageLoaded] = useState<boolean>(false)

    const [speciesList, setSpeciesList] = useState<CharacterTYPE[]>([]);

    const [filmsList, setFilmsList] = useState<CharacterTYPE[]>([]);

    const shouldLog = useRef(true)


    useEffect(() => {
        const fetchData = async () => {
            const characters = getCharacters(page, setCharactersList);
            const pages = getTotalPages(setTotalPages, totalPages);
            const species = await getData(setSpeciesList, 'https://swapi.dev/api/species/');
            const films = await getData(setFilmsList, 'https://swapi.dev/api/films/')
        };

        if (shouldLog.current) {
            shouldLog.current = false;
            fetchData();
        }
    }, []);

    useEffect(() => {
        const fetchCharacters = async () => {
            const characters = await getCharacters(page, setCharactersList);
        }


        if (isPageLoaded) {
            shouldLog.current = false;
            fetchCharacters();
        }

    }, [page])

    console.log(page)

    function renderPagesBar() {

        let elements = [];

        for (let i = 1; i <= totalPages; i++) {
            elements.push(
                <h3 className='page__container' page-key={i} onClick={renderKey}>{i}</h3>
            );
        }
        return elements;
    }

    function renderKey(event: any) {
        setPageLoaded(true)
        setPage(parseInt(event.target.getAttribute('page-key')))
        setCharactersList([]);
    }

    if (totalPages <= 0) {

        return (
            <div className='loading__content'>
                <div className="loading__video">
                    <video autoPlay={true} loop={true} muted={true} src={videoBackground}></video>
                </div>
                <div className="loading__overlay"></div>
                <Loading />
            </div>
        )
    }

    console.log(charactersList)

    return (
        <div className="main__content">
            <div className="main__video">
                <video autoPlay={true} loop={true} muted={true} src={videoBackground}></video>
            </div>
            <div className="main__overlay"></div>
            <div className='main__cards'>
                <Sidebar
                    speciesList={speciesList}
                    filmsList={filmsList}
                />
                <div className="card__content">
                    <div className="search__card">
                        <input className='input__search' type="text" placeholder='Search for a character' />
                    </div>
                    <div className="card__grid">
                        {charactersList.length === 0 ? <Loading /> : charactersList.map((item: CharacterTYPE) => {
                            return (
                                <CharacterCard character={item} />
                            )
                        })}
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