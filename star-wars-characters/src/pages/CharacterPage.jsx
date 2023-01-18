import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import { images } from '../assets/images';

export const CharacterPage = () => {
  const { allCharacters } = useContext(CharacterContext);
  let { id } = useParams();

  const [character, setCharacter] = useState({});

  const getCharacterById = async id => {
    const result = await allCharacters.filter(character => {
      let url = `https://swapi.py4e.com/api/people/${id}/`;
      return character.url === url;
    });
    return result;
  };

  const getCharacter = async id => {
    const result = await getCharacterById(id);
    setCharacter(result[0]);
  };

  useEffect(() => {
    getCharacter(id);
  }, []);

  return (
    <div className="container character-page">
      <>
        <div className="container character-page">
          <h1>{character.name}</h1>
          <div className="info">
            <ul>
              <li>height: {character.height}</li>
              <li>mass: {character.mass}</li>
              <li>hair color: {character.hair_color}</li>
              <li>eye_color: {character.eye_color}</li>
              <li>gender: {character.gender}</li>
            </ul>
            <div className="character-page-img">
              <img src={images.characters[character.name]} alt={character.name} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
