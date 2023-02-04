import logo from "../../assets/logo.webp";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  Img,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  Select,
  Option,
  Radio,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useApi } from "../../contexts/ApiProvider/index";
import { Movies } from "../Movies";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState, useEffect } from "react";
import { InputComponent } from "../InputComponent";
import { SelectComponent } from "../SelectComponent";


const NavLink = ({ children, setIsHomePage, currentPage }) => (
  <Link
    px={2}
    py={1}
    color={"white"}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: "gray.700",
      fontSize: "bold",
    }}
    href={children.link}
    onClick= {() => {
        if (currentPage === children.link) {
          setIsHomePage(children.page)
        }
      }}
  >
    {children.name}
  </Link>
);


const Links = [
  { name: "Home", link: "/", page: true },
  { name: "Todos os personagens", link: "/people", page: true},
  { name: "Filtros", link: "/filter", page: false },
];

export const MenuNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    getCharacters,
    movies,
    species,
    PeopleList,
    selectedValue,
    setSelectedValue,
    selectedValueSpecie,
    setSelectedValueSpecie,
  } = useApi();

  const [isHomePage, setIsHomePage] = useState(false);

useEffect(() => {
  Links.forEach(link => {
    if (link.link === window.location.pathname) {
      setIsHomePage(link.page);
    }
  });
}, []);

  console.log(isHomePage);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChangeSpecie = (event) => {
    setSelectedValueSpecie(event.target.value);
  };

  return (
    <>
      <Flex
        bg={"#111010"}
        px={4}
        mb="5"
        direction={"column"}
        alignItems={"center"}
        w={"100%"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            bg={"gray.700"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Img src={logo} alt="logo" h="32px" />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
            {Links.map((link, index) => (
            <NavLink key={index} _activeLink={{color: 'yellow'}}>{link}</NavLink>
          ))}
          {isHomePage? <InputComponent /> : 
          <>
             <SelectComponent
                   options={movies}
                   placeholder="Filmes"
                   onChange={handleChange}
                 />
                 <SelectComponent
                   options={species}
                   placeholder="Espécies"
                   onChange={handleChangeSpecie}
                 />
          </>
                 }
 
            </Stack>
          </Box>
        ) : null}
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link, index) => (
            <NavLink key={index} _activeLink={{color: 'yellow'}}>{link}</NavLink>
          ))}
          {isHomePage? <InputComponent /> : 
          <>
             <SelectComponent
                   options={movies}
                   placeholder="Filmes"
                   onChange={handleChange}
                 />
                 <SelectComponent
                   options={species}
                   placeholder="Espécies"
                   onChange={handleChangeSpecie}
                 />
          </>
                 }
 
          
        </HStack>
      </Flex>
    </>
  );
};
