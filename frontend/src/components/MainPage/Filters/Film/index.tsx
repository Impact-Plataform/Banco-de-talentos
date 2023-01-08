import React, { useEffect, useState } from "react";
import Person from "../../../../model/person.model";
import { Div, List, ListItem } from "./../style";
import apiService from "../../../../services/api.service";

const Film = (props: {
  persons: Person[];
  updatePersons: Function;
  active: string;
  updateFilterActive: Function;
}) => {
  const { persons, updatePersons, active, updateFilterActive } = props;

  const [films, setFilms] = useState([]);
  useEffect(() => {
    apiService.getAllFilms().then((data) => {
      setFilms(data);
    });
  }, [films]);

  const filterPersons = (filterItem: string) => {
    let filteredPersons: Person[] = persons.filter((person: Person) => {
      for (let film of person.films) {
        if (film === filterItem) {
          return true;
        }
      }
      return false;
    });
    updatePersons(filteredPersons);
  };

  return films.length > 0 ? (
    <Div>
      <h2>Filmes</h2>
      <List>
        {films.map((film: any) => {
          return (
            <ListItem
              className={active === film.title ? "selected" : ""}
              onClick={(e) => {
                filterPersons(film.url);
                updateFilterActive(film.title);
              }}
            >
              {film.title}
            </ListItem>
          );
        })}
      </List>
    </Div>
  ) : (
    <></>
  );
};

export default Film;
