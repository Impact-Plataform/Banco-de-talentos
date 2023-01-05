import { useState, useCallback } from "react";
import { Heading } from "../../components/Heading";
import { Illustrations } from "../../assets";
import { Card, Search } from "../../components";
import { useCharactersContext } from "../../contexts";
import { CardsWrapper } from "./styles";

const Home = () => {
  const { characters, loading } = useCharactersContext();

  const { searchCharacters, clearSearch } = useCharactersContext();

  const [query, setQuery] = useState("");

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    setQuery(value);
    if (query !== "") {
      searchCharacters(query);
    } else {
      clearSearch();
    }
  }, []);

  const filtered = query
    ? characters.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      })
    : characters;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <img src={Illustrations.StarWars} alt="Star Wars" />
      <Heading
        level={1}
        fontSize="header2"
        color="lightColor"
        textTransform="uppercase"
        spacing="4px"
        weight="700"
        align="center"
      >
        Characters
      </Heading>

      <Search handleChange={handleChange} query={query} />

      <CardsWrapper>
        {filtered.map((character) => (
          <Card key={character.url} character={character} />
        ))}
      </CardsWrapper>
    </>
  );
};

export default Home;
