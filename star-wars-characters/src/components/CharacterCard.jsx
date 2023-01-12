import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';
export const CharacterCard = ({ character, id }) => {
  // console.log(character.url);
  // console.log(id);
  return (
    <Link to={`/character/${id}`} className="character-card">
      <div className="card-image">
        <img src={images.characters[character.name]} alt={`${character.name}`} />
      </div>
      <div className="card-info">
        <span className="character-id">{id}</span>
        <h3>{character.name}</h3>
      </div>
    </Link>
  );
};
