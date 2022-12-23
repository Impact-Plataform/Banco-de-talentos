import React, { useEffect, useState } from 'react';
import { getCharacters } from '../Services';
import { CharacterTYPE } from '../Types';

function Home() {
    const [charactersList, setCharactersList] = useState<CharacterTYPE[]>([]);

    useEffect(() => {
        getCharacters(1, setCharactersList);
    },[])

    console.log(charactersList);

    if(charactersList === undefined){
       return (
        <div>
            Loading...
        </div>
       )
      }

    return(
        <div>
            {charactersList.map((item) => {
                return(
                <div> 
                    <h3>{item.name}</h3>
                </div>
                )
            })}
        </div>
    )
}

export default Home;