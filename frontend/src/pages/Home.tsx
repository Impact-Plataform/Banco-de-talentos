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
      {characters &&
        characters.map((character, index) => <Card key={index} character={character} />)}
      <Footer />
    </div>
  );
}
