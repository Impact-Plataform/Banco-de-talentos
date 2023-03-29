import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { CharacterCard } from "../../components/CharactCard";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { Searchbar } from "../../components/Searchbar";

import axios from "axios";

import { SearchError } from "./styles";
import { Pagination } from "../../components/Pagination";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchCharacters() {
    const url = searchQuery
      ? `https://swapi.dev/api/people/?search=${searchQuery}`
      : `https://swapi.dev/api/people/?page=${currentPage}`;
    const response = await axios.get(url);
    console.log(response.data.results);

    setCharacters(response.data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchCharacters();
    }, 1000);
  }, [currentPage]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header imageSrc="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png" />
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} fetchCharacters={fetchCharacters} />
      {characters.length === 0 ? (
        <SearchError>
          <p>Nenhum personagem encontrado, tente novamente!</p>
        </SearchError>
      ) : (
        <>
          <CharacterCard characters={characters} />
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
      <Footer />
    </div>
  );
};
