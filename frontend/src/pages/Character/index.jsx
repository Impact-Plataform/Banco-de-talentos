import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Footer } from "../../components/Footer";

import { formatHeight } from "../../utils/formatHeight";

import {
  CharacterContainer,
  CharacterCard,
  Name,
  Info,
  Film,
  FilmTitle,
  FilmeDesc,
  BackIcon,
  Planet,
  PlanetName,
  PlanetPopulation,
} from "./styles";

import axios from "axios";

export const Character = () => {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [films, setFilms] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const nameWithoutHyphen = name.split("-")[0];
      const response = await axios.get(`https://swapi.dev/api/people/?search=${nameWithoutHyphen}`);
      const responseHomeworld = await axios.get(response.data.results[0].homeworld.toString());
      const responseFilms = await Promise.all(response.data.results[0].films.map((url) => axios.get(url)));

      console.log(responseHomeworld.data);
      console.log(response.data.results);

      setCharacter(response.data.results[0]);
      setHomeworld(responseHomeworld.data);
      setFilms(responseFilms.map((response) => response.data));
    };

    fetchCharacter();
  }, [name]);

  if (!character) {
    return <Loading />;
  }

  return (
    <>
      <Header imageSrc="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png" />
      <CharacterContainer>
        <Link to={"/"}>
          <BackIcon />
        </Link>
        <CharacterCard>
          <Name>{character.name}</Name>
          <Info>
            <span>Ano de nascimento:</span> {character.birth_year}
          </Info>
          <Info>
            <span>Altura:</span> {formatHeight(character.height)}m
          </Info>
          <Info>
            <span>Peso:</span> {character.mass}Kg
          </Info>
          <Info>
            <span>Gênero:</span> {character.gender}
          </Info>
          <Info>
            <span>Cor da pele:</span> {character.skin_color}
          </Info>
          <Info>
            <span>Cor do cabelo:</span> {character.hair_color}
          </Info>
          <Info>
            <span>Cor dos olhos:</span> {character.eye_color}
          </Info>
          <Film>Filmes</Film>
          {films.map((film) => (
            <div key={film.title}>
              <FilmTitle>{film.title}</FilmTitle>
              <FilmeDesc>{film.opening_crawl}</FilmeDesc>
            </div>
          ))}
          <Planet>Planeta natal</Planet>
          <PlanetName>{homeworld.name}</PlanetName>
          <PlanetPopulation>{homeworld.population} habitantes</PlanetPopulation>
        </CharacterCard>
      </CharacterContainer>
      <Footer />
    </>
  );
};
