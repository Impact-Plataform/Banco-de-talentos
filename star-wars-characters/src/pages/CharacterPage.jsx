import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import { images } from '../assets/images';

export const CharacterPage = () => {
  const { getCharacterById } = useContext(CharacterContext);
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  const { id } = useParams();
  const getCharacter = async id => {
    const data = await getCharacterById(id);
    console.log('characterpage: ', data);
    // guarda o objeto do personagem
    setCharacter(data.data);
    setLoading(false);
  };
  useEffect(() => {
    getCharacter(id);
  }, []);

  // "name": "Tion Medon",
  // "height": "206",
  // "mass": "80",
  // "hair_color": "none",
  // "skin_color": "grey",
  // "eye_color": "black",
  // "birth_year": "unknown",
  // "gender": "male",
  return (
    <div className="container main-character">
      {loading ? (
        <h2>Loading...</h2>
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
