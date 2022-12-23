import React from 'react';
import { Character, CharacterTYPE } from '../Types';

function CharacterCard({character} : Character) {
    return(
        <div>
            <h3>{character.name}</h3>
        </div>
    )
}

export default CharacterCard;