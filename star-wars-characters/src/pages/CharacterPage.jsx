import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import { images } from '../assets/images';
import { charactersAbout } from '../helpers/data.js';

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
    <div className="character-page">
      <main className="page-card">
        <div className="page-img">
          <img src={images.characters[character.name]} alt={character.name} />
        </div>
        <div className="about">
          <h1>{character.name}</h1>
          <p>{charactersAbout.characters[character.name]}</p>
        </div>
      </main>
    </div>
  );
};

// <div className="container character-page">
// <div className="page-card"></div>

// <div className="about">
//   <div className="about-img">
//     <img src={images.characters[character.name]} alt={character.name} />
//   </div>
//   <div className="about-text">
//     <h1>{character.name}</h1>
//     <p>{charactersAbout.characters[character.name]}</p>
//   </div>
// </div>
// </div>
