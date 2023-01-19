import Select from 'react-select';
import { useEffect, useState } from 'react';
import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { genderOptions, filmOptions, specieOptions, stylesSelect } from '../helpers/data.js';
import '../assets/styles/Filters.css';

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
    <div className=" container filters">
      <Select
        name="gender"
        className="select"
        onChange={event => setFilterByGender([event.value])}
        options={genderOptions}
        // defaultValue={genderOptions[0]}
        placeholder={'Filter By Gender'}
        styles={stylesSelect}
        autoFocus
      />

      <Select
        name="film"
        onChange={event => setFilterByFilm([event.value])}
        options={filmOptions}
        styles={stylesSelect}
        placeholder={'Filter By Film'}
      />

      <Select
        name="specie"
        options={specieOptions}
        styles={stylesSelect}
        onChange={event => setFilterBySpecie([event.value])}
        placeholder={'Filter By Specie'}
      />

      <button type="submit" onClick={handleClickClear}>
        Clear Filters
      </button>
    </div>
  );
};
