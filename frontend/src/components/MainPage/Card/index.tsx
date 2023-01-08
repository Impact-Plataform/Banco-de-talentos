import React from "react";
import { Section } from "./style";

import Person from "../../../model/person.model";
import { useNavigate } from "react-router-dom";
import PersonDetails from "../../PersonDetails";
const Card = (props: { person: Person }) => {
  const { person } = props;
  const navigate = useNavigate();

  const openCard = (id: string) => {
    navigate(`/card/${id}`);
  };

  return (
    <Section
      onClick={(e) => {
        openCard(person.id);
      }}
    >
      <PersonDetails person={person} />
    </Section>
  );
};

export default Card;
