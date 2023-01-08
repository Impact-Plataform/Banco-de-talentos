import React, { useEffect, useState } from "react";

import {
  Section,
  Cards,
  Container,
  Button,
  ContainerCards,
  Pages,
} from "./style";
import Card from "./Card";
import Person from "../../model/person.model";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import apiService from "../../services/api.service";

const MainPage = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [data, setData] = useState<Person[]>([]);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);
  const pages = Math.ceil(count / itensPerPage);

  useEffect(() => {
    apiService.getPeopleByPage(currentPage).then((data) => {
      const dataApi: Person[] = data.results;
      setCount(data.count);
      setPersons(dataApi);
      setData(dataApi);
    });
  }, [currentPage]);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const [filterActive, setFilterActive] = useState("");

  const updatePersons = (persons: Person[]) => {
    setPersons(persons);
  };
  const updateFilterActive = (item: string) => {
    setFilterActive(item);
  };

  return (
    <>
      {data.length > 0 ? (
        <Section>
          <SearchBar
            updatePersons={updatePersons}
            filterActive={filterActive}
            updateFilterActive={updateFilterActive}
          />
          <Container>
            <Filters
              updatePersons={updatePersons}
              filterActive={filterActive}
              updateFilterActive={updateFilterActive}
              changePage={changePage}
              data={data}
            ></Filters>

            <ContainerCards>
              <Cards>
                {persons.map((person: Person) => {
                  return <Card person={person} key={person.id} />;
                })}
              </Cards>
              <Pages>
                {Array.from(Array(pages), (item, index) => {
                  return filterActive === "" ? (
                    <Button
                      key={index + new Date().getTime()}
                      onClick={(e) => {
                        changePage(index + 1);
                        setFilterActive("");
                      }}
                      className={index + 1 === currentPage ? "clicked" : ""}
                    >
                      {index + 1}
                    </Button>
                  ) : (
                    <></>
                  );
                })}
              </Pages>
            </ContainerCards>
          </Container>
        </Section>
      ) : (
        <h1 style={{ color: "white" }}>Carregando</h1>
      )}
    </>
  );
};

export default MainPage;
