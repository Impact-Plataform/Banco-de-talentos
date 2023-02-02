import { CharacterCard } from "../../components/characterCard/CharacterCard";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { PaginationComponent } from "../../components/paginationComponent/PaginationComponent";
import { useAPiInfo } from "../../contexts/providers/ApiData";
import { useFilter } from "../../contexts/providers/Filter";
import "./stylesAllCharacters.css";
import { motion } from "framer-motion";

export const AllCharacters = () => {
  const { data } = useAPiInfo();
  const { dataFiltered } = useFilter();

  const generalData = dataFiltered.length > 0 ? dataFiltered : data;

  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: -window.innerWidth }}
    >
      <Header />
      <main className="all-characters__container">
        <ul className="all-characters__list">
          {generalData.map((character) => {
            return <CharacterCard character={character} />;
          })}
        </ul>
        <PaginationComponent />
      </main>
      <Footer />
    </motion.div>
  );
};
