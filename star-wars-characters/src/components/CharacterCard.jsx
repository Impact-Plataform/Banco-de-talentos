import React from 'react';
import { Link } from 'react-router-dom';
export const CharacterCard = ({ character, id, image }) => {
  console.log(character.url);
  console.log(id);
  return (
    <div>
      <Link to={`/character/${id}`} className="character-card">
        <div className="card-image">
          <img src={image} alt={`${character.name}`} />
        </div>
        <div className="card-info">
          <span className="character-id">{id}</span>
          <h3>{character.name}</h3>
        </div>
      </Link>
    </div>
  );
};
