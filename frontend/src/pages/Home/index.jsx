import { Heading } from "../../components/Heading";
import { Illustrations } from "../../assets";
import Card from "../../components/Card";
import { useCharactersContext } from "../../contexts";
import { CardsWrapper } from "./styles";

const Home = () => {
  const { characters, loading } = useCharactersContext();

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

      <CardsWrapper>
        {characters.map((character) => (
          <Card key={character.url} character={character} />
        ))}
      </CardsWrapper>
    </>
  );
};

export default Home;
