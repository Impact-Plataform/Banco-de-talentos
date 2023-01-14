import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';
export const CharacterCard = ({ character }) => {
  // pega apenas o id do personagem
  let id = character.url.substring(character.url.length - 3, character.url.length).replaceAll('/', '');

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
