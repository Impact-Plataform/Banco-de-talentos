import { Flex } from "@chakra-ui/react";
import { MenuNav } from "../../components/MenuNav";

import { RenderAllCharacters } from "../../components/RenderAllCharacters";
import { SpinnerComponent } from "../../components/SpinnerComponent";
import { useApi } from "../../contexts/ApiProvider";

export const Home = () => {
  const { loading } = useApi();
  return (
    <Flex alignItems={"center"} direction={"column"} w={"100%"}>
      <MenuNav />
      {loading ? <SpinnerComponent /> : <RenderAllCharacters />}
    </Flex>
  );
};
