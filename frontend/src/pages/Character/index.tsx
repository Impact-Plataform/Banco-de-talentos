import { useParams } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
import { getPerson } from "../../api/people/getPerson";

export const Character = () => {
  const [characterData, setCharacterData] = useState<any>(null);
  const params = useParams();

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
      {characterData && (
        <div>
          <div>Name: {characterData.name}</div>
          <div>Height: {characterData.height} cm</div>
          <div>Mass: {characterData.mass} Kg</div>
          <div>Birth year: {characterData.birth_year}</div>
          <div>Eye color: {characterData.eye_color}</div>
          <div>Gender: {characterData.gender}</div>
          <div>Hair color: {characterData.hair_color}</div>
        </div>
      )}
    </>
  );
};
