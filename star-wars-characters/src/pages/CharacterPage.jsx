import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import { Loader } from '../components';
import { images } from '../assets/images';
import { charactersAbout } from '../helpers/data.js';
import '../assets/styles/CharacterPage.css';

export const CharacterPage = () => {
  const { getCharacterById } = useContext(CharacterContext);
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  let { id } = useParams();

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
