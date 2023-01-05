import { Heading } from "../Heading";
import { Illustrations } from "../../assets";
import Card from "../../components/Card";
import { useCharactersContext } from "../../contexts";

const Home = () => {
  const { loading } = useCharactersContext();

  if (loading) {
    return <p>Loading...</p>;
  }

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

      <Card />
    </>
  );
};

export default Home;
