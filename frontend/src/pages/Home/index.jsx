import { useState, useCallback } from "react";
import { Heading } from "../../components/Heading";
import { BabyYoda, Illustrations } from "../../assets";
import { Card, Search, Filter } from "../../components";
import { useCharactersContext, useFilterContext } from "../../contexts";
import { CardsWrapper, Logo, Filters, EmptyMessage } from "./styles";
import "./styles.css";

const Home = () => {
  const { loading, searchCharacters, clearSearch, filmsData, speciesData } =
    useCharactersContext();

  // filter function
  const { updateFilterValue, all_characters, filter_character } =
    useFilterContext();

  const getUniqueValue = (data, attr) => {
    let newValue = data.map((currentElem) => {
      return currentElem[attr];
    });

    return ["all", ...new Set(newValue)];
  };

  const filterGender = getUniqueValue(all_characters, "gender");
  const filterFilm = getUniqueValue(filmsData, "url");
  const filterSpecie = getUniqueValue(speciesData, "url");

  console.log(filter_character);

  // search function
  const [query, setQuery] = useState("");

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setQuery(value);
      if (query !== "") {
        searchCharacters(query);
      } else {
        clearSearch();
      }
    },
    [clearSearch, searchCharacters, query],
  );

  // map data
  const filtered = query
    ? filter_character.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      })
    : filter_character;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Logo>
        <img src={Illustrations.StarWars} alt="Star Wars" />
      </Logo>
      <Heading
        id="title"
        level={1}
        fontSize="header3"
        color="lightColor"
        textTransform="uppercase"
        spacing="15px"
        weight="700"
        align="center"
      >
        Characters
      </Heading>

      <Search handleChange={handleChange} query={query} />

      <Filters>
        <div className="filterBy">
          <img src={Illustrations.FilterIcon} alt="" />
          <p>Filter By</p>
        </div>
        <Filter
          updateFilterValue={updateFilterValue}
          filterData={filterGender}
          name="genders"
          color={"#FF8989"}
        />
        <Filter
          updateFilterValue={updateFilterValue}
          filterData={filterFilm}
          name="films"
          filterName={filmsData}
          color={"#45C1FF"}
        />
        <Filter
          updateFilterValue={updateFilterValue}
          filterData={filterSpecie}
          name="species"
          filterName={speciesData}
          color={"#57FF86"}
        />
      </Filters>

      <CardsWrapper>
        {filtered.map((character) => (
          <Card key={character.url} character={character} />
        ))}
        {filtered.length === 0 && (
          <EmptyMessage>
            <BabyYoda />
            <Heading level={2} align="center">
              NOTHING HERE...
            </Heading>
            <p>❝ Do. Or do not. There is no try ❞</p>
          </EmptyMessage>
        )}
      </CardsWrapper>
    </>
  );
};

export default Home;
