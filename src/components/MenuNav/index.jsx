import logo from "../../assets/logo.webp";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";
import { InputComponent } from "../InputComponent";

import { NavLink } from "react-router-dom";

const NavLinks = ({ children, setIsHomePage, currentPage }) => (
  <Link
    px={2}
    py={1}
    as={NavLink}
    exact
    _activeLink={{
      color: "yellow.500",
      textDecoration: "underline",
    }}
    fontSize={"xl"}
    color={"white"}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: "gray.700",
      fontSize: "bold",
    }}
    to={children.link}
    onClick={() => {
      if (currentPage === children.link) {
        setIsHomePage(children.page);
      }
    }}
  >
    {children.name}
  </Link>
);

const Links = [
  { name: "Home", link: "/", page: true },
  { name: "Todos os personagens", link: "/people", page: true },
  { name: "Filtros", link: "/filter", page: false },
];

export const MenuNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    Links.forEach((link) => {
      if (link.link === window.location.pathname) {
        setIsHomePage(link.page);
      }
    });
  }, []);

  return (
    <>
      <Flex
        bg={"#111010"}
        px={4}
        direction={"column"}
        alignItems={"center"}
        w={"100%"}
      >
        <Flex h={16} alignItems={"center"}>
          <IconButton
            size={"md"}
            bg={"gray.700"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            mr={"90%"}
            ml={"-50%"}
          />

          <Img src={logo} alt="logo" h="42px" />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <NavLinks key={index}>{link}</NavLinks>
              ))}
              {isHomePage ? <InputComponent /> : null}
            </Stack>
          </Box>
        ) : null}
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link, index) => (
            <NavLinks key={index}>{link}</NavLinks>
          ))}
          {isHomePage ? <InputComponent /> : null}
        </HStack>
      </Flex>
    </>
  );
};
