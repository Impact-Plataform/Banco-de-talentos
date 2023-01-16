import Select from 'react-select';
import { useEffect, useState } from 'react';
import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { genderOptions, filmOptions, specieOptions } from '../helpers/data.js';

export const Filters = () => {
  const { allCharacters, setFilteredCharacters } = useContext(CharacterContext);
  const [filterByGender, setFilterByGender] = useState([]);
  const [filterByFilm, setFilterByFilm] = useState([]);
  const [filterBySpecie, setFilterBySpecie] = useState([]);

  const handleClickClear = event => {
    // event.preventDefault();
    setFilterByGender([]);
    setFilterByFilm([]);
    setFilterBySpecie([]);
    setFilteredCharacters([]);
  };

  useEffect(() => {
    if (!filterByGender.length && !filterByFilm.length && !filterBySpecie.length) return;

    let filtered = allCharacters
      .filter(character => (filterByGender.length ? filterByGender.includes(character.gender) : character))
      .filter(character =>
        filterByFilm.length ? filterByFilm.some(film => character.movies.includes(film)) : character
      )
      .filter(character =>
        filterBySpecie.length ? filterBySpecie.some(specie => character.specie.includes(specie)) : character
      );

    setFilteredCharacters(filtered);
  }, [filterByGender, filterByFilm, filterBySpecie]);

  console.log('filter by gender', filterByGender);
  console.log('filter by film', filterByFilm);
  console.log('filter by specie', filterBySpecie);
  return (
    <>
      <Select
        name="gender"
        onChange={event => setFilterByGender([event.value])}
        options={genderOptions}
        defaultValue={genderOptions[0]}
      />
      <Select
        name="film"
        onChange={event => setFilterByFilm([event.value])}
        options={filmOptions}
        defaultValue={filmOptions[0]}
      />
      <Select
        name="specie"
        options={specieOptions}
        onChange={event => setFilterBySpecie([event.value])}
        defaultValue={specieOptions[0]}
      />

      <button type="submit" onClick={handleClickClear}>
        Clear Filters
      </button>
    </>
  );
};
