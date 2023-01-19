import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useCharacters } from '../../providers/Characters';
import { Card } from './Card';

export function Cards() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const { charactersToShow, addPage } = useCharacters();

  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      if (entities.some((target) => target.isIntersecting)) addPage();
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center pt-52 px-3">
      {charactersToShow?.map((character, index) => (
        <Link key={index} to={`details/${character.name}`}>
          <Card character={character} mode="simplified" />
        </Link>
      ))}
      <div ref={loaderRef} />
    </div>
  );
}
