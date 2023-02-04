import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useApi } from "../../contexts/ApiProvider";

const MenuItems = ({ children }) => {
    return (
      <MenuItem as={Link} bg={"gray.700"}>
        {children.title}
      </MenuItem>
    );
  };

export const Movies = () => {
  const { movies, getMovies } = useApi();

  return (
    <Menu>
      <MenuButton
        as={Button}
        bg={"none"}
        _hover={{ bg: "none", color: "gray.700" }}
        cursor={"pointer"}
        minW={0}
      >
        <HStack>
          <Text>Movies</Text>
          <AiOutlineArrowDown />
        </HStack>
      </MenuButton>
      <MenuList>
        {movies.map((movie) => (
          <>
            <MenuItems key={movie.episode_id}>{movie}</MenuItems>
            <MenuDivider key={movie.name}/>
          </>
        ))}
      </MenuList>
    </Menu>
  );
};
