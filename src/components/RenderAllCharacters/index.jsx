import { useApi } from "../../contexts/ApiProvider";
import { Card } from "../Card";
import { Flex } from "@chakra-ui/react";

export const RenderAllCharacters = () => {
  const { characters } = useApi();

  return (
    <Flex wrap={"wrap"} justifyContent={"center"} maxW={1300}>
      {characters.map((character, index) => {
        return <Card character={character} key={index} />;
      })}
    </Flex>
  );
};
