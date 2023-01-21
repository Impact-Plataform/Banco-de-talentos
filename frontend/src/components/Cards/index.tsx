import cx from 'classnames';
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
    <div
      className={cx(
        'grid items-center pt-56 px-4 gap-4',
        'sm:pt-40 sm:grid-cols-2',
        'lg:pt-32 lg:grid-cols-3',
        'xl:grid-cols-4',
      )}
    >
      {charactersToShow?.map((character, index) => (
        <Link key={index} to={`${character.name}`} className={cx('h-full')}>
          <Card character={character} mode="simplified" />
        </Link>
      ))}
      <div ref={loaderRef} />
    </div>
  );
}
