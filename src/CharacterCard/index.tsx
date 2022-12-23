import React from 'react';
import { CharacterListPropTYPE, CharacterTYPE } from '../Types';

function CharacterCard({charactersList} : CharacterListPropTYPE) {
    return(
        <div>
         {charactersList.map((item : CharacterTYPE) => {
            return(
                <div>
                    <h3>{item.name}</h3>
                 </div>
            )
         })}
        </div>
    )
}

export default CharacterCard;