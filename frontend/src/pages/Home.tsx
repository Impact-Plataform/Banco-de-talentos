import { useContext } from 'react';

import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CharactersContext, CharactersContextData } from '../providers/Characters';

export function Home() {
  const { characters } = useContext(CharactersContext) as CharactersContextData;

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-16">
        {characters &&
          characters.map((character, index) => (
            <Card key={index} character={character} />
          ))}
      </div>
      <Footer />
    </div>
  );
}
