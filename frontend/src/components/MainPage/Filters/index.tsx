import React, { useState, useEffect, useRef } from "react";
import { ButtonShowFilters, ContainerFiltros, Section } from "./style";
import Film from "./Film";
import Person from "../../../model/person.model";
import Specie from "./Specie";
import Gender from "./Gender";
import apiService from "../../../services/api.service";
import { Button } from "./style";
import { MdDoubleArrow } from "react-icons/md";

const Filters = (props: {
  updatePersons: Function;
  filterActive: string;
  updateFilterActive: Function;
  changePage: Function;
  data: Person[];
}) => {
  const { updatePersons, filterActive, updateFilterActive, changePage, data } =
    props;
  const [persons, setPersons] = useState<Person[]>();
  const filtersRef = useRef<any>();

  useEffect(() => {
    apiService.getAllPersons().then((data) => setPersons(data));
  }, []);

  return (
    <ContainerFiltros>
      <ButtonShowFilters
        onClick={(e) => {
          const display = filtersRef.current.style.display;
          if (display !== "inherit") {
            filtersRef.current.style.display = "inherit";
            return;
          }
          filtersRef.current.style.display = "none";
        }}
      >
        <MdDoubleArrow size={28} />
      </ButtonShowFilters>
      <Section ref={filtersRef}>
        <h1>Filtros</h1>
        <Gender
          persons={persons!}
          updatePersons={updatePersons}
          active={filterActive}
          updateFilterActive={updateFilterActive}
        ></Gender>
        <Film
          persons={persons!}
          updatePersons={updatePersons}
          active={filterActive}
          updateFilterActive={updateFilterActive}
        ></Film>
        <Specie
          persons={persons!}
          updatePersons={updatePersons}
          active={filterActive}
          updateFilterActive={updateFilterActive}
        ></Specie>
        <Button
          onClick={(e) => {
            updateFilterActive("");
            updatePersons(data);
            changePage(1);
          }}
        >
          Limpar Filtros
        </Button>
      </Section>
    </ContainerFiltros>
  );
};

export default Filters;
