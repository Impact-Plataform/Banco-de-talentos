import { useCallback, useState } from "react";
import { changeSlug } from "../../helpers/slug";
import { useCharactersContext } from "../../contexts";
import { Heading } from "../Heading";
import P from "prop-types";
import {
  CardBox,
  CharactersInfo,
  InfoDetailsWrapper,
  InfoDetails,
  FilmsWrapper,
  ListFilms,
  Films,
  SeeMoreLink,
} from "./styles";
import Info from "./Info";

const filmColor = (episode) => {
  if (episode === 1) return "#91d6a59c";
  if (episode === 2) return "#e7909083";
  if (episode === 3) return "#7bc8ee93";
  if (episode === 4) return "#95935D";
  if (episode === 5) return "#b688d29d";
  if (episode === 6) return "#eb93d787";
  if (episode === 7) return "#a287628d";
};

export const Card = ({ character }) => {
  const {
    name,
    gender,
    birth_year,
    mass,
    height,
    species,
    skin_color,
    hair_color,
    eye_color,
    films,
  } = character;

  const { filmsData, speciesData } = useCharactersContext();
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      setShowMoreInfo(!showMoreInfo);
    },
    [showMoreInfo],
  );

  return (
    <CardBox onClick={handleClick}>
      <header>
        <Heading level={2} align="center" color="yellowColor" weight="700">
          {name}
        </Heading>
        <CharactersInfo open={true}>
          <Info title="Gender" data={gender} />
          <Info title="Birthyear" data={birth_year} />
          <Info
            title="Species"
            data={
              species.length > 0
                ? speciesData.map((specie) =>
                    species.includes(specie.url) ? specie.name : "",
                  )
                : "-"
            }
          />
        </CharactersInfo>
      </header>

      <InfoDetailsWrapper>
        <InfoDetails>
          <Info title="Height" data={height} />
        </InfoDetails>
        <InfoDetails>
          <Info title="Mass" data={mass} />
        </InfoDetails>
      </InfoDetailsWrapper>

      <CharactersInfo open={showMoreInfo}>
        <Info title="Skin" data={skin_color} />
        <Info title="Hair" data={hair_color} />
        <Info title="Eye" data={eye_color} />
      </CharactersInfo>

      <FilmsWrapper>
        <Heading
          level={3}
          spacing="0.15em"
          fontSize="small"
          textTransform="uppercase"
          weight="700"
        >
          Films
        </Heading>
        <ListFilms>
          {filmsData.map(
            (film) =>
              films.includes(film.url) && (
                <Films key={film.episode_id} cor={filmColor(film.episode_id)}>
                  {film.title}
                </Films>
              ),
          )}
        </ListFilms>
      </FilmsWrapper>
      <SeeMoreLink to={`character/${changeSlug(name)}`}>
        More Info ►
      </SeeMoreLink>
    </CardBox>
  );
};

Card.propTypes = {
  character: P.object,
};

export default Card;
