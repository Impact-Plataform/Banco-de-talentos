import React from 'react';
import { Character, CharacterTYPE } from '../Types';

function CharacterCard({ character }: any) {
    // console.log(character)
    return (

        <div className="card">
            <img src={character.image} className='character__img' alt="" />
            <div className="character__info">
                <h2>NAME</h2>
                <h3>{character.name}</h3>
            </div>
            <div className="character__info">
                <h2>PLANET</h2>
                <h3>{character.homeworld}</h3>
            </div>
        </div>
    )
}

export default CharacterCard;