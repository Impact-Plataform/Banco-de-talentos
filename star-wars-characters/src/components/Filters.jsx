import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';

const genders = ['Female', 'Hermaphrodite', 'Male', 'N/A', 'None'];
const films = [
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'The Phantom Menace',
  'Attack of the Clones',
  'Revenge of the Sith',
];
const species = [
  'Human',
  'Droid',
  'Wookie',
  'Rodian',
  'Hutt',
  "Yoda's species",
  'Trandoshan',
  'Mon Calamari',
  'Ewok',
  'Sullustan',
  'Neimodian',
  'Gungan',
  'Toydarian',
  'Dug',
  "Twi'lek",
  'Aleena',
  'Vulptereen',
  'Xexto',
  'Toong',
  'Cerean',
  'Nautolan',
  'Zabrak',
  'Tholothian',
  'Iktotchi',
  'Quermian',
  'Kel Dor',
  'Chagrian',
  'Geonosian',
  'Mirialan',
  'Clawdite',
  'Besalisk',
  'Kaminoan',
  'Skakoan',
  'Muun',
  'Togruta',
  'Kaleesh',
  "Pau'an",
];
export const Filters = () => {
  const { onChangeFilter } = useContext(CharacterContext);

  return (
    <>
      <div>
        <label>Filter by Gender</label>
        <select name="gender" onChange={onChangeFilter}>
          <option value="">All</option>
          {genders.map(gender => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Filter by Film</label>
        <select name="film" onChange={onChangeFilter}>
          <option value="">All</option>
          {films.map(film => (
            <option key={film} value={film}>
              {film}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Filter by Species</label>
        <select name="specie" onChange={onChangeFilter}>
          <option value="">All</option>
          {species.map(specie => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
