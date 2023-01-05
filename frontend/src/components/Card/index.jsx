import { useCallback, useState } from "react";
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
  SeeMoreButton,
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
          {character.name}
        </Heading>
        <CharactersInfo open={true}>
          <Info title="Gender" data={character.gender} />
          <Info title="Birthyear" data={character.birth_year} />
          <Info
            title="Species"
            data={
              character.species.length > 0
                ? speciesData.map((specie) =>
                    character.species.includes(specie.url) ? (
                      <p key={specie.url}>{specie.name}</p>
                    ) : (
                      ""
                    ),
                  )
                : "-"
            }
          />
        </CharactersInfo>
      </header>

      <InfoDetailsWrapper>
        <InfoDetails>
          <Info title="Height" data={character.height} />
        </InfoDetails>
        <InfoDetails>
          <Info title="Mass" data={character.mass} />
        </InfoDetails>
      </InfoDetailsWrapper>

      <CharactersInfo open={showMoreInfo}>
        <Info title="Skin" data={character.skin_color} />
        <Info title="Hair" data={character.hair_color} />
        <Info title="Eye" data={character.eye_color} />
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
              character.films.includes(film.url) && (
                <Films key={film.episode_id} cor={filmColor(film.episode_id)}>
                  {film.title}
                </Films>
              ),
          )}
        </ListFilms>
      </FilmsWrapper>
      <SeeMoreButton>More Info ►</SeeMoreButton>
    </CardBox>
  );
};

Card.propTypes = {
  character: P.object,
};

export default Card;
