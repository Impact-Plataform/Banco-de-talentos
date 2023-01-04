import { Heading } from "../Heading";
import { Illustrations } from "../../assets";

const Home = () => {
  return (
    <>
      <img src={Illustrations.StarWars} alt="Star Wars" />
      <Heading
        level={1}
        fontSize="header2"
        color="lightColor"
        textTransform="uppercase"
        spacing="4px"
        weight="700"
        align="center"
      >
        Characters
      </Heading>
    </>
  );
};

export default Home;
