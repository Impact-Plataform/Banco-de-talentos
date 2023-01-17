import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';
export const CharacterCard = ({ character }) => {
  // pega apenas o id do personagem
  let id = character.url.substring(character.url.length - 3, character.url.length).replaceAll('/', '');

  return (
    <div className="character-card">
      <div className="card-img">
        <img src={images.characters[character.name]} alt={`${character.name}`} />
      </div>
      <div className="info">
        <span className="id">{id}</span>
        <h3 className="name">{character.name}</h3>
      </div>
      <Link to={`/character/${id}`}>
        <button className="btn-more">Show More</button>
      </Link>
    </div>
  );
};
