import { createContext, useContext, useEffect, useState } from "react";
import { ProviderProps } from "../interfaces/providerProps";
import { useAPiInfo } from "./ApiData";

interface FilterContextProps {
  dataFiltered: any[];
  filterData: (word: string, filterFunction: (word: string) => any[]) => void;
}

const filterContext = createContext<FilterContextProps>(
  {} as FilterContextProps
);

export const useFilter = () => {
  const context = useContext(filterContext);

  return context;
};

export const FilterProvider = ({ children }: ProviderProps) => {
  const { data } = useAPiInfo();

  useEffect(() => {
    setDataFiltered([]);
  }, [data]);

  const [dataFiltered, setDataFiltered] = useState<any[]>([]);

  const filterData = (
    word: string,
    filterFunction: (word: string) => any[]
  ) => {
    const filtered = filterFunction(word.toLowerCase().trim());
    setDataFiltered(filtered);
  };

  return (
    <filterContext.Provider value={{ dataFiltered, filterData }}>
      {children}
    </filterContext.Provider>
  );
};
