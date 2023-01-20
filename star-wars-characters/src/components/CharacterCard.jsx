import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';
import { toCapitalize } from '../helpers/helper.js';
import '../assets/styles/CharacterCard.css';

export const CharacterCard = ({ character }) => {
  // pega apenas o id do personagem
  let id = character.url.substring(character.url.length - 3, character.url.length).replaceAll('/', '');

  return (
    <div>
      <Link className="btn-more" to={`/character/${id}`}>
        Show More
      </Link>
      <div className="character-card">
        <span className="up"></span>

        <img src={images.characters[character.name]} alt="" />
        <div className="overlay">
          <div className="title">
            <h3>{character.name}</h3>
            <span className="id">{id}</span>
          </div>
          <div className="status">
            <ul>
              <li>
                <strong>Height:</strong> {character.height}.
              </li>
              <li>
                <strong>Mass:</strong> {character.mass}.
              </li>
              <li>
                <strong>Gender:</strong> {toCapitalize(character.gender)}
              </li>
              <li>
                <strong>Specie:</strong>{' '}
                {/* // vai verificar se o personagem possui specie (alguns retornam null ou []) */}
                {character.specie.length === 0 || !character.specie[0] ? 'Not Found' : character.specie}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
