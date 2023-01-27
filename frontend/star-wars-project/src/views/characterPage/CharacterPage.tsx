import "./stylesCharacterPage.css";
import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAPiInfo } from "../../contexts/providers/ApiData";
import { getCharacterName } from "../../utils/getCharacterName";
import { Header } from "../../components/header/Header";

export const CharacterPage = () => {
  const [characterProfile, setCharacterProfile] = useState<any>();
  const { data } = useAPiInfo();
  const { character } = useParams();
  const characterName = character ? getCharacterName(character) : "";

  useEffect(() => {
    if (data.length > 0) {
      const filterChoosenCharacter = data.filter((character2) => {
        return character2.name.toLowerCase() === characterName;
      });
      setCharacterProfile(filterChoosenCharacter[0]);
    }
  }, [data.length]);

  console.log("choosen character --->", characterProfile);

  return (
    <>
      <Header />
      <h1>{characterProfile && characterProfile.name}</h1>;
    </>
  );
};
