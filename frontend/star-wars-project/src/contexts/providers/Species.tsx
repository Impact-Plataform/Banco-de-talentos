import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../services/api";
import { getEndpoint } from "../../utils/getEndpoint";
import { ProviderProps } from "../interfaces/providerProps";
import { useAPiInfo } from "./ApiData";

interface SpeciesProps {
  url: string;
  name: string;
}

interface SpeciesContextProps {
  speciesInPage: SpeciesProps[];
}

const SpeciesContext = createContext<SpeciesContextProps>(
  {} as SpeciesContextProps
);

export const useSpecies = () => {
  const context = useContext(SpeciesContext);

  return context;
};

export const SpeciesProvider = ({ children }: ProviderProps) => {
  const { data } = useAPiInfo();

  const [speciesInPage, setSpeciesInPage] = useState<SpeciesProps[]>([
    { url: "", name: "Unknown" },
  ]);

  useEffect(() => {
    if (data.length > 0) {
      const charactersWithSpecie: any[] = data.filter(
        (item) => item.species.length > 0
      );

      const linkOfCharactersWithSpecie: any[] = charactersWithSpecie.map(
        (item) => item.species[0]
      );

      const deleteRepeatedLinks: any[] = linkOfCharactersWithSpecie.filter(
        (item, index) => {
          return linkOfCharactersWithSpecie.indexOf(item) === index;
        }
      );

      const finalSpecies: SpeciesProps[] = [{ url: "", name: "unknown" }];
      axios.all(deleteRepeatedLinks).then((responses) => {
        responses.forEach((res) => {
          api.get(getEndpoint(res)).then((resp) => {
            finalSpecies.push({ url: resp.data.url, name: resp.data.name });
          });
        });
      });
      setSpeciesInPage(finalSpecies);
    }
  }, [data]);

  return (
    <SpeciesContext.Provider value={{ speciesInPage }}>
      {children}
    </SpeciesContext.Provider>
  );
};
