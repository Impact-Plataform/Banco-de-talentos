import React from 'react';
import { CharacterTYPE } from '../Types';

function CharacterCard({charactersList} : any) {
    return(
        <div>
         {charactersList.map((item : CharacterTYPE) => {
            <div>
                <h3>{item.name}</h3>
            </div>
         })}
        </div>
    )
}

export default CharacterCard;