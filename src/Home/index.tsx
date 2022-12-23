import React, { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard';
import { getCharacters } from '../Services';
import { CharacterTYPE } from '../Types';

function Home() {
    const [charactersList, setCharactersList] = useState<CharacterTYPE[]>([]);

    useEffect(() => {
        getCharacters(1, setCharactersList);
    },[])

    
    if(!charactersList){
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
                <CharacterCard character={item}/>
                )
            })}
        </div>
    )
}

export default Home;