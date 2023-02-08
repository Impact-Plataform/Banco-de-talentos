import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Image,
  HStack,
} from "@chakra-ui/react";
import {
  FcInTransit,
  FcClapperboard,
  FcElectronics,
  FcDownRight,
} from "react-icons/fc";
import { Footer } from "../../components/Footer";
import { MenuNav } from "../../components/MenuNav";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.500"}>{text}</Text>
    </Stack>
  );
};

export const CharacterPage = ({ location }) => {
  const { character } = location.state;

  console.log(character);

  return (
    <Flex alignItems={"center"} direction={"column"} w={"100%"}>
      <MenuNav />
      <Image
        rounded={"md"}
        alt={"product image"}
        src={
          "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
        }
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
      />
      <Text fontSize={25} m={5} color={'yellow.600'}>
        {character.name}
      </Text>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2}>
          <Feature
            icon={<Icon as={FcElectronics} w={10} h={10} />}
            title={"Naves"}
            text={
              character.starships.length > 0 ? (
                character.starships.map((starship, index) => (
                  <HStack key={index}>
                    <FcDownRight />
                    <Text >{typeof starship === 'string' ? starship : starship.name}</Text>
                  </HStack>
                ))
              ) : (
                <Text>O personagem não possui nave!</Text>
              )
            }
          />
          <Feature
            icon={<Icon as={FcClapperboard} w={10} h={10} />}
            title={"Filmes"}
            text={character.films.map((film, index) => (
              <HStack key={index}>
                <FcDownRight />
                <Text >{typeof film === 'string' ? film : film.title}</Text>
              </HStack>
            ))}
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={"Veículos"}
            text={
              character.vehicles.length > 0 ? (
                character.vehicles.map((vehicle, index) => (
                  <HStack key={index}>
                    <FcDownRight />
                    <Text >
                        {typeof vehicle === 'string' ? vehicle : vehicle.name}
                        </Text>
                  </HStack>
                ))
              ) : (
                <Text>O personagem não possui veículo!</Text>
              )
            }
          />
        </SimpleGrid>
      </Box>
      <Footer />
    </Flex>
  );
};
