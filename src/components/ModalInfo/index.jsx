import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import {
  CgGym,
  CgSmile,
  CgArrowsVAlt,
  CgBrush,
  CgHomeAlt,
} from "react-icons/cg";
import { useHistory } from "react-router-dom";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export const ModalInfo = ({ character }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let history = useHistory();
  let id = encodeURIComponent(character.name);

  const handleClick = () => {
    history.push({
      pathname: `/character/${id}`,
      state: { character },
    });
  };

  return (
    <>
      <Button
        onClick={onOpen}
        w={"100%"}
        bg="white"
        _hover={{ bg: "yellow.500" }}
      >
        Saiba mais
        <BsArrowUpRight />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader color={"gray.900"}>+ INFO</ModalHeader>
          <ModalCloseButton color={"red"} />
          <ModalBody bg={"blackAlpha.900"}>
            <Container maxW={"5xl"} py={12}>
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                <Stack spacing={4}>
                  <Heading>{character.name}</Heading>
                  <Stack
                    spacing={4}
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue("gray.100", "gray.700")}
                      />
                    }
                  >
                    <Feature
                      icon={
                        <Icon as={CgHomeAlt} color={"red.500"} w={5} h={5} />
                      }
                      iconBg={useColorModeValue("red.100", "red.900")}
                      text={character.homeworld}
                    />
                    <Feature
                      icon={
                        <Icon as={CgGym} color={"yellow.500"} w={5} h={5} />
                      }
                      iconBg={useColorModeValue("yellow.100", "yellow.900")}
                      text={`${character.mass} Kg`}
                    />
                    <Feature
                      icon={
                        <Icon as={CgBrush} color={"green.500"} w={5} h={5} />
                      }
                      iconBg={useColorModeValue("green.100", "green.900")}
                      text={character.hair_color}
                    />

                    <Feature
                      icon={
                        <Icon
                          as={CgArrowsVAlt}
                          color={"purple.500"}
                          w={5}
                          h={5}
                        />
                      }
                      iconBg={useColorModeValue("purple.100", "purple.900")}
                      text={character.height}
                    />
                    <Feature
                      icon={
                        <Icon as={CgSmile} color={"pink.500"} w={5} h={5} />
                      }
                      iconBg={useColorModeValue("pink.100", "purple.900")}
                      text={character.skin_color}
                    />
                  </Stack>
                </Stack>
              </SimpleGrid>
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button onClick={handleClick} colorScheme="teal">
              Visite a página
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
