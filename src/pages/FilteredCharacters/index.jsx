import { Text, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { MenuNav } from "../../components/MenuNav";
import axios from "axios";
import { Card } from "../../components/Card";
import { useApi } from "../../contexts/ApiProvider";
import { FilterComponent } from "../../components/FilterComponent";
import { SpinnerComponent } from "../../components/SpinnerComponent";
import { Footer } from "../../components/Footer";
import ReactPaginate from "react-paginate";
import "./pagination.css";

export const FilteredCharacters = () => {
  const {
    selectedValue,
    selectedValueSpecie,
    selectedGender,
    getAllDataFromApi,
  } = useApi();

  const [loading, setLoading] = useState(true);

  const [allPeople, setAllPeople] = useState([]);

  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const getRelatedData = async (urls) => {
    const promises = urls.map(async (url) => {
      const response = await axios.get(url);
      return response.data;
    });
    const relatedData = await Promise.all(promises);
    const filteredData = relatedData.map((data) => {
      if (data.hasOwnProperty("name")) {
        return data.name;
      }
      return data;
    });
    return filteredData;
  };

  const apiUrl = "https://swapi.dev/api/people/";

  useEffect(() => {
    async function fetchData() {
      let peopleWithRelatedData = localStorage.getItem("allPeople");
      if (!peopleWithRelatedData) {
        const people = await getAllDataFromApi(apiUrl);
        peopleWithRelatedData = await Promise.all(
          people.map(async (person) => {
            const relatedData = await getRelatedData([
              ...person.films,
              ...person.vehicles,
              ...person.starships,
              ...person.species,
              person.homeworld,
            ]);
            return {
              ...person,
              homeworld: relatedData[relatedData.length - 1],
              films: relatedData.slice(0, person.films.length),
              vehicles: relatedData.slice(
                person.films.length,
                person.films.length + person.vehicles.length
              ),
              starships: relatedData.slice(
                person.films.length + person.vehicles.length,
                person.films.length +
                  person.vehicles.length +
                  person.starships.length
              ),
              species: relatedData.slice(
                person.films.length +
                  person.vehicles.length +
                  person.starships.length,
                person.films.length +
                  person.vehicles.length +
                  person.starships.length +
                  person.species.length
              ),
            };
          })
        );
        localStorage.setItem(
          "allPeople",
          JSON.stringify(peopleWithRelatedData)
        );
      } else {
        peopleWithRelatedData = JSON.parse(peopleWithRelatedData);
      }
      setAllPeople(peopleWithRelatedData);
      setLoading(false);
    }
    fetchData();
  }, [getAllDataFromApi]);

  const filteredCharacters = allPeople.filter((character) => {
    return (
      character.films.some((film) => film.title === selectedValue) ||
      character.species.includes(selectedValueSpecie) ||
      character.gender === selectedGender
    );
  });

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const paginatedCharacters = filteredCharacters.slice(
    currentPage * 10,
    currentPage * 10 + 10
  );
  console.log(filteredCharacters);

  return (
    <Flex alignItems={"center"} direction={"column"} w={"100%"}>
      <MenuNav />
      <FilterComponent />
      {loading ? (
        <SpinnerComponent />
      ) : filteredCharacters.length === 0 ? (
        <Text m={10}>
          Escolha um dos filtros para achar os personagens correspondentes!
        </Text>
      ) : (
        <Flex wrap={"wrap"} maxW={1300} justifyContent={"center"}>
          {paginatedCharacters.map((character) => (
            <Card character={character} key={character.name} />
          ))}
        </Flex>
      )}
      {filteredCharacters.length > 10 && (
        <Flex mt={10} justifyContent="center">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(filteredCharacters.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            activeClassName={"item active "}
            containerClassName={"pagination"}
            disabledClassName={"disabled-page"}
            pageClassName={"item pagination-page "}
            previousClassName={"item previous"}
            nextClassName={"item next"}
          />
        </Flex>
      )}

      <Footer />
    </Flex>
  );
};
