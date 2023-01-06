import React from "react";
import { Section, Name, Details, DetailItem } from "./style";

import Person from "../../../model/person.model";

const Card = (props: { person: Person }) => {
  const { person } = props;
  return (
    <Section>
      <Name>{person.name}</Name>
      <Details>
        <DetailItem>
          <span>Peso</span>
          <span>{person.height}</span>
        </DetailItem>
        <DetailItem>
          <p>Massa</p>
          <p>{person.mass}</p>
        </DetailItem>
        <DetailItem>
          <p>Cor do cabelo</p>
          <p>{person.hair_color}</p>
        </DetailItem>
        <DetailItem>
          <p>Cor de pele</p>
          <p>{person.skin_color}</p>
        </DetailItem>
        <DetailItem>
          <p>Cor dos olhos</p>
          <p>{person.eye_color}</p>
        </DetailItem>
        <DetailItem>
          <p>Ano de nascimento</p>
          <p>{person.birth_year}</p>
        </DetailItem>
        <DetailItem>
          <p>Gênero</p>
          <p>{person.gender}</p>
        </DetailItem>
      </Details>
    </Section>
  );
};

export default Card;
