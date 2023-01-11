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
    ao acessar na API a url: https://swapi.dev/api/people/17
    retornava "not found", em seguida pulava para https://swapi.dev/api/people/18
    para resolver, decidi fazer essa verificação abaixo
    acrescentando +1 a partir do id 17.
  */

  if (+id >= 17) {
    id = parseInt(id) + 1;
    console.log(typeof id);
  }
  const getCharacter = async id => {
    const data = await getCharacterById(id);
    // guarda o objeto do personagem
    setCharacter(data.data);
    setLoading(false);
  };
  useEffect(() => {
    getCharacter(id);
  }, []);

  return (
    <div className="container main-character">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container main-character">
            <h1>{character.name}</h1>
            <div className="character-info">
              <ul>
                <li>height: {character.height}</li>
                <li>mass: {character.mass}</li>
                <li>hair color: {character.hair_color}</li>
                <li>eye_color: {character.eye_color}</li>
                <li>gender: {character.gender}</li>
              </ul>
              <div className="character-image">
                <img src={images.characters[character.name]} alt={character.name} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
