import React, { useContext, useEffect } from 'react';
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
export const Filters = () => {
  const { allCharacters, setFilteredCharacters } = useContext(CharacterContext);

  const onChangeGenderSelected = event => {
    console.log(event.target.value.toLowerCase());

    if (event.target.value) {
      const filteredResults = allCharacters.filter(character => {
        return character.gender === event.target.value.toLowerCase();
      });
      console.log(filteredResults);
      setFilteredCharacters(filteredResults);
    } else {
      setFilteredCharacters([]);
    }
  };

  return (
    <>
      <div>
        <label>Filter by gender</label>
        <select onChange={onChangeGenderSelected} name="gender" id="gender">
          <option value="">All</option>
          {genders.map(gender => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      <select>
        <option value="">Film</option>
        {films.map(film => (
          <option key={film} value={film}>
            {film}
          </option>
        ))}
      </select>
    </>
  );
};
