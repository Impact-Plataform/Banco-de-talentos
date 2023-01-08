import React, { useEffect, useState } from "react";
import Person from "../../../../model/person.model";
import { Div, ListItem } from "./../style";
import { List } from "./style";
import apiService from "../../../../services/api.service";

const Specie = (props: {
  persons: Person[];
  updatePersons: Function;
  active: string;
  updateFilterActive: Function;
}) => {
  const { persons, updatePersons, active, updateFilterActive } = props;
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    apiService.getAllSpecies().then((data) => {
      setSpecies(data);
    });
  }, [species]);

  const filterPersons = (filterItem: string) => {
    let filteredPersons: Person[] = persons.filter((person: Person) => {
      for (let specie of person.species) {
        if (specie === filterItem) {
          return true;
        }
      }
      return false;
    });
    updatePersons(filteredPersons);
  };

  return species.length > 0 ? (
    <Div>
      <h2>Espécies</h2>
      <List>
        {species.map((specie: any) => {
          return (
            <ListItem
              key={specie.url}
              className={active === specie.name ? "selected" : ""}
              onClick={(e) => {
                filterPersons(specie.url);
                updateFilterActive(specie.name);
              }}
            >
              {specie.name}
            </ListItem>
          );
        })}
      </List>
    </Div>
  ) : (
    <></>
  );
};

export default Specie;
