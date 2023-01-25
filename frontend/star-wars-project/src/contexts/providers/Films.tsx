import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { api } from "../../services/api";
import { ProviderProps } from "../interfaces/providerProps";

interface FilmProps {
  name: string;
  url: string;
}

interface FilmsContextProps {
  films: FilmProps[];
}

const FilmsContext = createContext<FilmsContextProps>({} as FilmsContextProps);

export const useFilms = () => {
  const context = useContext(FilmsContext);

  return context;
};

export const FilmsProvider = ({ children }: ProviderProps) => {
  const [films, setFilms] = useState<FilmProps[]>([
    { url: "", name: "unknown" },
  ]);
  const [allFilms, setallFilms] = useState<any[]>([]);

  useEffect(() => {
    api.get("/films").then((res) => setallFilms(res.data.results));
  }, []);

  useMemo(() => {
    if (allFilms.length > 0) {
      const getTitleAndUrl = allFilms.map((film) => {
        return { url: film.url, name: film.title };
      });

      setFilms(getTitleAndUrl);
    }
  }, [allFilms.length]);

  console.log("films ------>", films);
  return (
    <FilmsContext.Provider value={{ films }}>{children}</FilmsContext.Provider>
  );
};
