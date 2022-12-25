import React, { useEffect, useRef, useState } from 'react';
import CharacterCard from '../CharacterCard';
import { getCharacters, getTotalPages } from '../Services';
import { CharacterTYPE } from '../Types';
import loadingGif from '../assets/loading.gif';
import videoBackground from '../assets/background.mp4';
import './index.css';

function Home() {
    const [charactersList, setCharactersList] = useState<any>([]);

    const [totalPages, setTotalPages] = useState<number>(0);

    const [page, setPage] = useState<number>(1);

    const [isPageLoaded, setPageLoaded] = useState<boolean>(false)

    const shouldLog = useRef(true)


    useEffect(() => {
        const fetchCharacters = async () => {
            const characters = await getCharacters(page, setCharactersList);
        }

        const fetchPages = async () => {
            const pages = await getTotalPages(setTotalPages, totalPages);
        }

        if (shouldLog.current)
        {
            shouldLog.current = false;
            fetchCharacters();
            fetchPages();
        }
    },[])

    useEffect(() => {

        console.log(page)
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
        console.log(event.target.getAttribute('page-key'));
        setPageLoaded(true)
        setPage(parseInt(event.target.getAttribute('page-key')))
        // shouldLog.current = true

        // const fetchCharacters = async () => {
        //     const characters = await getCharacters(page, setCharactersList);
        // }

        // if (shouldLog.current)
        // {
        //     shouldLog.current = false;
        //     fetchCharacters();
        //     fetchPages();
        // }

    }


    




    if(totalPages <= 0){

       return (
        <div className='main__content'>
            <div className="main__video">
                <video autoPlay={true} loop={true} muted={true} src={videoBackground}></video>
            </div>
            <div className="main__overlay"></div>
            <div className="main__loading main__loading-column">
                <img src={loadingGif} alt="" />
                <h2 className='blink'>Loading...</h2>
            </div>
        </div>
       )
      }

    //   console.log(charactersList)

    return(
        <div className="main__content">
             <div className="main__video">
                <video autoPlay={true} loop={true} muted={true} src={videoBackground}></video>
            </div>
            <div className="main__overlay"></div>
            <div className="main__loading">
                {charactersList
                    .map((item:any) => {
                        return(
                        <CharacterCard character={item}/>
                        )
                })}
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