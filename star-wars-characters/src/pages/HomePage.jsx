import React from 'react';
import { CharacterList } from '../components';
import { Filters } from '../components/Filters';

export const HomePage = () => {
  return (
    <div className="container">
      <Filters />
      <CharacterList />
    </div>
  );
};
