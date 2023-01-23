import { createContext, useContext, useState } from "react";
import { ProviderProps } from "../interfaces/providerProps";

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
  const [dataFiltered, setDataFiltered] = useState<any[]>([]);
  console.log("dataFiltered -> ", dataFiltered);

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
