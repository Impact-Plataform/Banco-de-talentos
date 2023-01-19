import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import { Loader } from '../components';
import { images } from '../assets/images';
import { charactersAbout } from '../helpers/data.js';

export const CharacterPage = () => {
  const { allCharacters, getCharacterById } = useContext(CharacterContext);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const [character, setCharacter] = useState({});

  // const getCharacterById = async id => {
  //   const result = await allCharacters.filter(character => {
  //     let url = `https://swapi.py4e.com/api/people/${id}/`;
  //     return character.url === url;
  //   });
  //   return result;
  // };
  const getCharacter = async id => {
    const data = await getCharacterById(id);
    setCharacter(data.data);
    setLoading(false);
  };
  // const getCharacter = async id => {
  //   const result = await getCharacterById(id);
  //   setCharacter(result[0]);
  // };

  useEffect(() => {
    getCharacter(id);
  }, []);

  return (
    <div className="character-page">
      {loading ? (
        <Loader />
      ) : (
        <main className="page-card">
          <div className="page-img">
            <img src={images.characters[character.name]} alt={character.name} />
          </div>
          <div className="about">
            <h1>{character.name}</h1>
            <p>{charactersAbout.characters[character.name]}</p>
          </div>
        </main>
      )}
    </div>
  );
};
