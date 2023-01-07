import React from "react";
import { Section, Main, Button, DivNotExist } from "./style";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PersonDetails from "../PersonDetails";
import Person from "../../model/person.model";
import Films from "./films";
import Specie from "./specie";
import Homeworld from "./homeworld";
import Vehicles from "./vehicles";
import Starships from "./starships";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const data = require("../../api.json");

const FullCardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const persons: Person[] = data.map((item: Person) => {
    const url: string = item.url;
    const [, pId] = url.split("https://swapi.py4e.com/api/people/");
    const [id] = pId.split("/");
    item.id = id;
    return item;
  });
  let person!: Person;
  let currentPostion = 0;
  persons.forEach((dataPerson: Person, i: number) => {
    if (dataPerson.id === id) {
      person = dataPerson;
      currentPostion = i;
    }
  });

  const [actualCard, setActualCard] = useState<number>(currentPostion);
  useEffect(() => {
    navigate(`/card/${persons[actualCard].id}`);
  }, [actualCard]);

  const nextCard = () => {
    if (actualCard + 1 > persons.length - 1) {
      return;
    }
    setActualCard((currentValue) => currentValue + 1);
  };
  const backCard = () => {
    if (actualCard - 1 < 0) {
      return;
    }

    setActualCard((currentValue) => currentValue - 1);
  };
  return (
    <Main>
      {actualCard !== 0 ? (
        <Button onClick={(e) => backCard()}>
          <MdOutlineChevronLeft size={42} />
        </Button>
      ) : (
        <DivNotExist />
      )}

      <Section>
        <PersonDetails person={person} />
        <Films personFilms={person.films} />
        <Specie personSpecie={person.species} />
        <Homeworld persHomeworld={person.homeworld} />
        <Vehicles personVehicles={person.vehicles} />
        <Starships personStarships={person.starships} />
      </Section>
      {actualCard + 1 > persons.length - 1 ? (
        <DivNotExist />
      ) : (
        <Button onClick={(e) => nextCard()}>
          <MdOutlineChevronRight size={42} />
        </Button>
      )}
    </Main>
  );
};

export default FullCardPage;
