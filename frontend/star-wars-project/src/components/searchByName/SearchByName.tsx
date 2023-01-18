import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useAPiInfo } from "../../contexts/providers/ApiData";
import { useFilter } from "../../contexts/providers/Filter";

import "./stylesSearchByName.css";

export const SearchByName = () => {
  const { data } = useAPiInfo();
  const { filterData } = useFilter();

  const searchByName = (word: string) => {
    const lowerWord = word.toLowerCase();
    const filterByName = data.filter((character) =>
      character.name.toLowerCase().includes(lowerWord)
    );

    return filterByName;
  };

  return (
    <div className="search-by-name__box">
      <input
        type="text"
        placeholder="Search by name"
        className="search-by-name__input"
        onChange={(e) => filterData(e.target.value, searchByName)}
      />
      <HiMagnifyingGlass className="search-by-name__icon" />
    </div>
  );
};
