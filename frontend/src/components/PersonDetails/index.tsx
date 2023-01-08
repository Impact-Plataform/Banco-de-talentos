import React from "react";
import { Section, Name, Details, DetailItem } from "./style";

import Person from "../../model/person.model";
import { useNavigate } from "react-router-dom";

const PersonDetails = (props: { person: Person }) => {
  const { person } = props;

  return (
    <>
      <Name>{person.name}</Name>
      <Details>
        <DetailItem>
          <span>Peso</span>
          <span>{person.height}</span>
        </DetailItem>
        <DetailItem>
          <span>Massa</span>
          <span>{person.mass}</span>
        </DetailItem>
        <DetailItem>
          <span>Cor do cabelo</span>
          <span>{person.hair_color}</span>
        </DetailItem>
        <DetailItem>
          <span>Cor de pele</span>
          <span>{person.skin_color}</span>
        </DetailItem>
        <DetailItem>
          <span>Cor dos olhos</span>
          <span>{person.eye_color}</span>
        </DetailItem>
        <DetailItem>
          <span>Ano de nascimento</span>
          <span>{person.birth_year}</span>
        </DetailItem>
        <DetailItem>
          <span>Gênero</span>
          <span>{person.gender}</span>
        </DetailItem>
      </Details>
    </>
  );
};

export default PersonDetails;
