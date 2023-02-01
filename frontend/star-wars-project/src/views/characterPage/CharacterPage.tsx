import "./stylesCharacterPage.css";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAPiInfo } from "../../contexts/providers/ApiData";
import { getCharacterName } from "../../utils/getCharacterName";
import { Header } from "../../components/header/Header";
import { ChosenCharacterInfo } from "../../components/choosenCharacterInfo/ChosenCharacterInfo";
import { Footer } from "../../components/footer/Footer";

export const CharacterPage = () => {
  const { data } = useAPiInfo();
  const { character } = useParams();
  const characterName = character ? getCharacterName(character) : "";

  const characterProfile = useMemo(() => {
    if (data.length > 0) {
      const filterChoosenCharacter = data.filter((character2) => {
        return character2.name.toLowerCase() === characterName;
      });
      return filterChoosenCharacter[0];
    }
  }, [data.length]);

  return (
    <>
      <Header isCharacterPage />
      <main className="character-info__container">
        {characterProfile ? (
          <ChosenCharacterInfo character={characterProfile} />
        ) : (
          <h1 style={{ color: "white" }}>loading...</h1>
        )}
      </main>
      <Footer />
    </>
  );
};
