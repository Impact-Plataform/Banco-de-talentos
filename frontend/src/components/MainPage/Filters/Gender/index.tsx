import React from "react";
import Person from "../../../../model/person.model";
import { Div, List, ListItem } from "./../style";
const genders = ["male", "female", "n/a", "none"];

const Gender = (props: {
  persons: Person[];
  updatePersons: Function;
  active: string;
  updateFilterActive: Function;
}) => {
  const { persons, updatePersons, active, updateFilterActive } = props;

  const filterPersons = (filterItem: string) => {
    let filteredPersons: Person[] = persons.filter((person: Person) => {
      if (person.gender === filterItem) {
        return true;
      }
      return false;
    });
    updatePersons(filteredPersons);
  };

  return (
    <Div>
      <h2>Gênero</h2>
      <List>
        {genders.map((gender: any) => {
          return (
            <ListItem
              className={active === gender ? "selected" : ""}
              onClick={(e) => {
                filterPersons(gender);
                updateFilterActive(gender);
              }}
            >
              {gender}
            </ListItem>
          );
        })}
      </List>
    </Div>
  );
};

export default Gender;
