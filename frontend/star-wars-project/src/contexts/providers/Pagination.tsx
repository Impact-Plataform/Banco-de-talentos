import { createContext, useContext, useState } from "react";
import { ProviderProps } from "../interfaces/providerProps";

interface PaginationContextProps {
  paginationNumbers: number[];
  selectedPaginationNumber: number;
  nextPage: () => void;
  previousPage: () => void;
  setPageNumber: (item: number) => void 
}

const PaginationContext = createContext<PaginationContextProps>(
  {} as PaginationContextProps
);

export const usePageNumber = () => {
  const context = useContext(PaginationContext);

  return context;
};

export const PaginationProvider = ({ children }: ProviderProps) => {
  const paginationNumbers = [1, 2, 3, 4, , 5, 6, 7, 8] as number[];
  const [number, setNumber] = useState<number>(0);

  const setPageNumber = (item: number) => setNumber(item - 1);
  const selectedPaginationNumber: number = paginationNumbers[number];

  const previousPage = () => {
    number > 0 && setNumber(number - 1);
  };
  const nextPage = () => {
    number < 7 && setNumber(number + 1);
  };

  return (
    <PaginationContext.Provider
      value={{
        selectedPaginationNumber,
        paginationNumbers,
        previousPage,
        nextPage,
        setPageNumber
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
