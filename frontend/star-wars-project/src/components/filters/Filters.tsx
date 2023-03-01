import { useState } from "react";

import "./stylesFilter.css";
import { BaseSelect } from "./baseSelect/BaseSelect";

import { useAPiInfo } from "../../contexts/providers/ApiData";
import { useFilter } from "../../contexts/providers/Filter";
import { useSpecies } from "../../contexts/providers/Species";
import { useFilms } from "../../contexts/providers/Films";

import { ModalBase } from "../modalBase/ModalBase";

export const Filter = () => {
  const { filterData } = useFilter();
  const { data } = useAPiInfo();
  const { speciesInPage } = useSpecies();
  const { films } = useFilms();

  const [sortBy, setSortBy] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const genders = ["Male", "Female", "n/a"];

  const filters = {
    sortDataByGender: (word: string) => {
      const filter = data.filter((character) => {
        return character.gender === word;
      });
      return filter;
    },
    sortDataBySpecie: (word: string) => {
      const filter = data.filter((character) => {
        if (word === "") return character.species.length === 0;
        return character.species[0] === word;
      });
      return filter;
    },
    sortDataByMovie: (word: string) => {
      const filter = data.filter((character) => {
        return character.films.includes(word);
      });
      return filter;
    },
  };

  const openAndCloseModal = () => setOpenModal(!openModal);

  return (
    <>
      <button
        className="filter__button filter__button--open"
        onClick={openAndCloseModal}
      >
        filters
      </button>
      {openModal && (
        <ModalBase closeModal={openAndCloseModal} isOpen={openModal}>
          <div className="filter__container">
            <BaseSelect
              placeholder="Sort by"
              options={["Gender", "Movie", "Specie"]}
              onChange={(e) => setSortBy(e.target.value)}
            />

            {sortBy === "" && (
              <div className="filter__false--filter">Filter</div>
            )}

            {sortBy === "Gender" && (
              <BaseSelect
                placeholder="Sort by Gender"
                options={genders}
                onChange={(e) =>
                  filterData(e.target.value, filters.sortDataByGender)
                }
              />
            )}
            {sortBy === "Movie" && (
              <BaseSelect
                placeholder="Sort by Movie"
                nestedOptions={films}
                onChange={(e) =>
                  filterData(e.target.value, filters.sortDataByMovie)
                }
              />
            )}
            {sortBy === "Specie" && (
              <BaseSelect
                placeholder="Sort by specie"
                nestedOptions={speciesInPage}
                onChange={(e) =>
                  filterData(e.target.value, filters.sortDataBySpecie)
                }
              />
            )}
            <button
              onClick={openAndCloseModal}
              className="filter__button filter__button--close"
            >
              Apply
            </button>
          </div>
        </ModalBase>
      )}
    </>
  );
};
