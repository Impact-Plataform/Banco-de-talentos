import { useContext, useEffect, useRef } from 'react';

import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CharactersContext, CharactersContextData } from '../providers/Characters';

export function Home() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const { characters, addPage } = useContext(CharactersContext) as CharactersContextData;

  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      if (entities.some((target) => target.isIntersecting)) addPage();
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center pt-16">
        {characters &&
          characters.map((character, index) => (
            <Card key={index} character={character} />
          ))}
        <div ref={loaderRef}>Carregando mais...</div>
      </div>
      <Footer />
    </div>
  );
}
