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
import apiService from "../../services/api.service";

const FullCardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [persons, setPersons] = useState<Person[]>([]);
  const [data, setData] = useState<Person[]>([]);
  const [person, setPerson] = useState<Person>();
  let currentPostion = 0;

  useEffect(() => {
    const date = apiService.getAllPersons().then((data) => {
      const dataApi: Person[] = data.map((item: Person) => {
        const url: string = item.url;
        const [, pId] = url.split("https://swapi.py4e.com/api/people/");
        const [id] = pId.split("/");
        item.id = id;
        return item;
      });
      setPersons(dataApi);
      setData(dataApi);
      dataApi.forEach((dataPerson: Person, i: number) => {
        if (dataPerson.id === id) {
          setPerson(dataPerson);
          setActualCard(i);
        }
      });
    });
  }, [id]);

  const [actualCard, setActualCard] = useState<number>(currentPostion);

  useEffect(() => {
    if (persons.length > 0) {
      navigate(`/card/${persons[actualCard].id}`);
    }
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
    <>
      {person ? (
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
      ) : (
        <h1>Carregando</h1>
      )}
    </>
  );
};

export default FullCardPage;
