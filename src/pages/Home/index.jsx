import { Flex } from "@chakra-ui/react";
import { MenuNav } from "../../components/MenuNav";

import { RenderAllCharacters } from "../../components/RenderAllCharacters";

export const Home = () => {
  return (
    <Flex alignItems={"center"} direction={"column"} w={"100%"}>
      <MenuNav />
      <RenderAllCharacters />
    </Flex>
  );
};
