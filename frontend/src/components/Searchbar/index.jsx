import { useEffect } from "react";
import { SearchContainer, SearchWrapper, InputSearch, SearchIcon, Button } from "./styles";

export const Searchbar = ({ searchQuery, setSearchQuery, fetchCharacters }) => {
  const handleSearch = () => {
    fetchCharacters();
  };

  useEffect(() => {
    if (searchQuery === "") {
      fetchCharacters();
    }
  }, [searchQuery]);

  return (
    <>
      <SearchContainer>
        <SearchWrapper>
          <SearchIcon />
          <InputSearch type="serch" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)}></InputSearch>
        </SearchWrapper>
        <Button onClick={handleSearch}>Buscar</Button>
      </SearchContainer>
    </>
  );
};
