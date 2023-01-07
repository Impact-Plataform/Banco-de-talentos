import React, { useState } from "react";
import Person from "../../../model/person.model";
import { Input, Div, Button, SearchIcon } from "./style";

const SearchBar = (props: { persons: Person[]; updatePersons: Function }) => {
  const { persons, updatePersons } = props;
  const [search, setSearch] = useState("");

  const checkKeyPress = (key: string) => {
    if (key === "Enter") {
      searchPerson(search);
    } else if (key === "Escape") {
      setSearch("");
    }
    return;
  };

  const searchPerson = (search: string) => {
    let filteredPersons = persons.filter((person) => {
      if (person.name.toLowerCase().includes(search)) {
        return person;
      }
      return false;
    });
    updatePersons(filteredPersons);
  };

  return (
    <Div>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={(e) => {
          checkKeyPress(e.key);
        }}
      ></Input>
      <Button onClick={(e) => searchPerson(search)}>
        <SearchIcon size={30}></SearchIcon>
      </Button>
    </Div>
  );
};

export default SearchBar;
