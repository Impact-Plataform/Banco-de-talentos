import { CharacterCard } from "../../components/characterCard/CharacterCard";
import { Header } from "../../components/header/Header";
import { useAPiInfo } from "../../contexts/providers/ApiData";
import { useFilter } from "../../contexts/providers/Filter";
import "./stylesAllCharacters.css";

export const AllCharacters = () => {
  const { data } = useAPiInfo();
  const { dataFiltered } = useFilter();

  const generalData = dataFiltered.length > 0 ? dataFiltered : data;

  return (
    <>
      <Header />
      <main className="all-characters__container">
        <ul className="all-characters__list">
          {generalData.map((character) => {
            return (
              <div>
                <CharacterCard character={character} />
              </div>
            );
          })}
        </ul>
      </main>
    </>
  );
};
