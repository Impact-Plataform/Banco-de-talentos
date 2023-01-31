import { getPeople } from "../../api/people";
import { useEffect, useState } from "react";
import { Button, CharacterCardList, Input, Spinner } from "../../components";
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
  const [loadingCharacters, setLoadingCharacters] = useState(false);

  const handleSearch = async () => {
    setLoadingCharacters(true);
    const charactersResponse = await getPeople({
      page: 1,
      search: searchName,
    });
    setCharacters(charactersResponse?.characters);
    setNextPage(charactersResponse?.nextPage);
    setPreviousPage(charactersResponse?.previousPage);
    setLoadingCharacters(false);
  };

  const handleCharacters = async () => {
    setLoadingCharacters(true);
    const charactersResponse = await getPeople({
      page: 1,
    });
    setCharacters(charactersResponse?.characters);
    setNextPage(charactersResponse?.nextPage);
    setPreviousPage(charactersResponse?.previousPage);
    setLoadingCharacters(false);
  };

  const handlePreviousPage = async () => {
    if (previousPage) {
      setLoadingCharacters(true);
      const charactersResponse = await getPeople({
        page: previousPage.split("=")[1],
      });
      setCharacters(charactersResponse?.characters);
      setNextPage(charactersResponse?.nextPage);
      setPreviousPage(charactersResponse?.previousPage);
      setLoadingCharacters(false);
    }
  };

  const handleNextPage = async () => {
    if (nextPage) {
      setLoadingCharacters(true);
      const charactersResponse = await getPeople({
        page: nextPage.split("=")[1],
      });
      setCharacters(charactersResponse?.characters);
      setNextPage(charactersResponse?.nextPage);
      setPreviousPage(charactersResponse?.previousPage);
      setLoadingCharacters(false);
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
      {loadingCharacters ? (
        <Spinner />
      ) : (
        <WrapperCharacterCardList>
          <CharacterCardList characters={characters} />
        </WrapperCharacterCardList>
      )}
      <Pagination>
        <Button text="Previous" onClick={handlePreviousPage} />
        <Button text="Next" onClick={handleNextPage} />
      </Pagination>
    </Container>
  );
};
