import React from "react";
import Person from "../../../../model/person.model";
import { Div, List, ListItem } from "./../style";
const films = require("../../../../apiFilms.json");

const Film = (props: {
  persons: Person[];
  updatePersons: Function;
  active: string;
  updateFilterActive: Function;
}) => {
  const { persons, updatePersons, active, updateFilterActive } = props;

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

  return (
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
  );
};

export default Film;
