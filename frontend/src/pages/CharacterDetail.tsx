import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getByPath } from '../api/SWAPI';
import { Card } from '../components/Cards/Card';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Character } from '../interfaces/character.interface';

export function CharacterDetail() {
  const { characterName } = useParams();

  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    getByPath('people', { search: characterName }).then(
      ({ ok, results: [res] }) => ok && setCharacter(res),
    );
  }, []);

  return (
    <div>
      <Header mode="simplified" />
      <div className="pt-36 sm:pt-32" />
      <div className="w-[90%] sm:w-[90%] flex flex-col items-center m-auto rounded-md">
        {character && <Card mode="complete" character={character as Character} />}
      </div>
      <div className="pt-32" />
      <Footer className="fixed bottom-0" />
    </div>
  );
}
