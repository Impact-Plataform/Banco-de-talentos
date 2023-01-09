import { useCallback, useRef } from "react";
import Info from "../Card/Info";
import {
  CarouselWrapper,
  ButtonCarousel,
  CarouselContainer,
  CarouselBox,
  CarouselItem,
} from "./styles";
import P from "prop-types";

export const Carousel = ({ data, species, planets }) => {
  const {
    name,
    gender,
    birth_year,
    skin_color,
    eye_color,
    hair_color,
    height,
    mass,
  } = data;
  const carousel = useRef(null);

  const handleLeftClick = useCallback((e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }, []);

  const handleRightClick = useCallback((e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }, []);

  const specie = species.map((item) =>
    data.species.includes(item.url) ? item.name : "",
  );

  const planet = planets.map((item) =>
    data.homeworld.includes(item.url) ? item.name : "",
  );

  return (
    <CarouselContainer>
      <ButtonCarousel onClick={handleLeftClick}>◂</ButtonCarousel>
      <CarouselBox ref={carousel}>
        <CarouselItem key={name}>
          <CarouselWrapper>
            <Info title="Gender" data={gender} />
            <Info title="Birthyear" data={birth_year} />
            <Info title="Species" data={specie} />
            <Info title="Homeworld" data={planet} />
            <Info title="Skin Color" data={skin_color} />
            <Info title="Hair Color" data={hair_color} />
            <Info title="Eye Color" data={eye_color} />
            <Info title="Height" data={height} />
            <Info title="Mass" data={mass} />
          </CarouselWrapper>
        </CarouselItem>
      </CarouselBox>
      <ButtonCarousel onClick={handleRightClick}>▸</ButtonCarousel>
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  data: P.object,
  species: P.array,
  planets: P.array,
};
