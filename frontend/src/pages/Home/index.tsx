import { getPeople } from "../../api/people";
import { useEffect, useState } from "react";
import { Button, CharacterCardList, Input } from "../../components";
import {
  Container,
  Pagination,
  SearchStyle,
  WrapperCharacterCardList,
} from "./styles";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState<any>(null);
  const [previousPage, setPreviousPage] = useState<any>(null);
  const [searchName, setSearchName] = useState("");

  const handleSearch = async () => {
    const charactersResponse = await getPeople({
      page: 1,
      search: searchName,
    });
    setCharacters(charactersResponse?.characters);
    setNextPage(charactersResponse?.nextPage);
    setPreviousPage(charactersResponse?.previousPage);
  };

  const handleCharacters = async () => {
    const charactersResponse = await getPeople({
      page: 1,
    });
    setCharacters(charactersResponse?.characters);
    setNextPage(charactersResponse?.nextPage);
    setPreviousPage(charactersResponse?.previousPage);
  };

  const handlePreviousPage = async () => {
    if (previousPage) {
      const charactersResponse = await getPeople({
        page: previousPage.split("=")[1],
      });
      setCharacters(charactersResponse?.characters);
      setNextPage(charactersResponse?.nextPage);
      setPreviousPage(charactersResponse?.previousPage);
    }
  };

  const handleNextPage = async () => {
    if (nextPage) {
      const charactersResponse = await getPeople({
        page: nextPage.split("=")[1],
      });
      setCharacters(charactersResponse?.characters);
      setNextPage(charactersResponse?.nextPage);
      setPreviousPage(charactersResponse?.previousPage);
    }
  };

  useEffect(() => {
    handleCharacters();
  }, []);

  return (
    <Container>
      <SearchStyle>
        <Input
          placeholder="Type a character name"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <Button text="Search" onClick={handleSearch} />
      </SearchStyle>
      <WrapperCharacterCardList>
        <CharacterCardList characters={characters} />
      </WrapperCharacterCardList>
      <Pagination>
        <Button text="Previous" onClick={handlePreviousPage} />
        <Button text="Next" onClick={handleNextPage} />
      </Pagination>
    </Container>
  );
};
