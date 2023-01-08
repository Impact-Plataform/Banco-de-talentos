import React, { useState, useEffect } from "react";
import Person from "../../../model/person.model";
import { Input, Div, Button, SearchIcon } from "./style";
import apiService from "../../../services/api.service";

const SearchBar = (props: {
  updatePersons: Function;
  filterActive: string;
  updateFilterActive: Function;
}) => {
  const { updatePersons, updateFilterActive } = props;
  const [search, setSearch] = useState("");
  const [persons, setPersons] = useState<Person[]>();

  useEffect(() => {
    apiService.getAllPersons().then((data) => setPersons(data));
  }, []);

  const checkKeyPress = (key: string) => {
    if (key === "Enter") {
      searchPerson(search);
    } else if (key === "Escape") {
      setSearch("");
    }
    return;
  };

  const searchPerson = (search: string) => {
    let filteredPersons = persons!.filter((person) => {
      if (person.name.toLowerCase().includes(search.toLowerCase())) {
        return person;
      }
      return false;
    });
    updateFilterActive("search");
    updatePersons(filteredPersons);
  };

  return (
    <Div>
      <Input
        placeholder="Digite o nome do personagem"
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
