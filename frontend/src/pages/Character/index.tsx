import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
import { getPerson } from "../../api/people/getPerson";
import { Button1 } from "../../components";
import { ButtonContainer, Container, CharacterInfo, InfoDiv } from "./styles";

export const Character = () => {
  const [characterData, setCharacterData] = useState<any>(null);
  const params = useParams();
  const navigate = useNavigate();

  const handlePerson = useCallback(async () => {
    const response = await getPerson({ id: params.id });

    if (response?.status === 200) {
      setCharacterData(response.character);
    }
  }, [params.id]);

  useEffect(() => {
    console.log(characterData);
  }, [characterData]);

  useEffect(() => {
    handlePerson();
  }, [handlePerson]);

  return (
    <>
      <ButtonContainer>
        <Button1 text="Back" onClick={() => navigate("/")} />
      </ButtonContainer>
      {characterData && (
        <Container>
          <CharacterInfo>
            <InfoDiv>Name: {characterData.name}</InfoDiv>
            <InfoDiv>Height: {characterData.height} cm</InfoDiv>
            <InfoDiv>Mass: {characterData.mass} kg</InfoDiv>
            <InfoDiv>Birth year: {characterData.birth_year}</InfoDiv>
            <InfoDiv>Eye color: {characterData.eye_color}</InfoDiv>
            <InfoDiv>Gender: {characterData.gender}</InfoDiv>
            <InfoDiv>Hair color: {characterData.hair_color}</InfoDiv>
          </CharacterInfo>
        </Container>
      )}
    </>
  );
};
