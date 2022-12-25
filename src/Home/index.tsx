import React, { useEffect, useRef, useState } from 'react';
import CharacterCard from '../CharacterCard';
import { getCharacters, getTotalPages } from '../Services';
import { CharacterTYPE } from '../Types';
import loadingGif from '../assets/loading.gif';
import videoBackground from '../assets/background.mp4';
import './index.css';
import Sidebar from '../SideBar';
import { getData } from '../Services/fetchSpecies';

function Home() {
    const [charactersList, setCharactersList] = useState<any>([]);

    const [totalPages, setTotalPages] = useState<number>(0);

    const [page, setPage] = useState<number>(1);

    const [isPageLoaded, setPageLoaded] = useState<boolean>(false)

    const [speciesList, setSpeciesList] = useState<any>([]);

    const [filmsList, setFilmsList] = useState<any>([]);

    const shouldLog = useRef(true)


    useEffect(() => {
        const fetchCharacters = async () => {
            const characters = await getCharacters(page, setCharactersList);
        }

        const fetchPages = async () => {
            const pages = await getTotalPages(setTotalPages, totalPages);
        }

        const fetchSpecies = async () => {
            const species = await getData(setSpeciesList, 'https://swapi.dev/api/species/');
        }

        const fetchFilms = async () => {
            const films = await getData(setFilmsList, 'https://swapi.dev/api/films/')
        }

        if (shouldLog.current)
        {
            shouldLog.current = false;
            fetchCharacters();
            fetchPages();
            fetchSpecies();
            fetchFilms();
        }
    },[])

    useEffect(() => {

        const fetchCharacters = async () => {
            const characters = await getCharacters(page, setCharactersList);
        }

        if (isPageLoaded)
        {
            shouldLog.current = false;
            fetchCharacters();
        }


    }, [page])

    function renderPagesBar()
    {

        let elements = [];

        for (let i = 1; i <= totalPages; i++) {
            elements.push(   
                <h3 className='page__container' page-key={i} onClick={renderKey}>{i}</h3>
            );
          }
          return elements;
    }
     
    function renderKey(event: any)
    {
        setPageLoaded(true)
        setPage(parseInt(event.target.getAttribute('page-key')))
    }

    if(totalPages <= 0){

       return (
        <div className='loading__content'>
            <div className="loading__video">
                <video autoPlay={true} loop={true} muted={true} src={videoBackground}></video>
            </div>
            <div className="loading__overlay"></div>
            <div className="loading__loading loading__loading-column">
                <img src={loadingGif} alt="" />
                <h2 className='blink'>Loading...</h2>
            </div>
        </div>
       )
      }

      console.log(charactersList)

    return(
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
                        <div className="card">
                            <img src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg" className='character__img' alt="" />

                            <div className="character__info">
                                <h3>NAME</h3>
                                <h3>Luke Skywalker</h3>
                            </div>
                            <div className="character__info">
                                <h3>PLANET</h3>
                                <h3>Tattoine</h3>
                            </div>
                        </div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                </div>
            </div>

           
            <div>
                {/* {charactersList
                    .map((item:any) => {
                        return(
                        <CharacterCard character={item}/>
                        )
                })} */}
            </div>
        </div>
        // <div>
        //     {charactersList
        //     .map((item:any) => {
        //         return(
        //         <CharacterCard character={item}/>
        //         )
        //     })}
        //     {/* <div className='page__box'>
        //         {renderPagesBar()}
        //     </div> */}

        // </div>
    )
}

export default Home;