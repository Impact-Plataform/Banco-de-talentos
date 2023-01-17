import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import { images } from '../assets/images';
import { Loader } from '../components';

export const CharacterPage = () => {
  const { getCharacterById } = useContext(CharacterContext);
  let { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  /* 
    No momento do meu desenvolvimento, 
    A api swapi tinha dados faltando: https://swapi.dev/api/people/
    mudei para https://swapi.py4e.com/api/
  */

  const getCharacter = async id => {
    const data = await getCharacterById(id);
    setCharacter(data.data);
    setLoading(false);
  };
  useEffect(() => {
    getCharacter(id);
  }, []);

  return (
    <div className="container character-page">
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};
