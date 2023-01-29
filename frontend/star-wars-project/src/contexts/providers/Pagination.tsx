import { createContext, useContext, useState } from "react";
import { ProviderProps } from "../interfaces/providerProps";

interface PaginationContextProps {
  paginationNumbers: number[];
  selectedPaginationNumber: number;
  nextPage: () => void;
  previousPage: () => void;
  setPageNumber: (item: number) => void;
}

const PaginationContext = createContext<PaginationContextProps>(
  {} as PaginationContextProps
);

export const usePageNumber = () => {
  const context = useContext(PaginationContext);

  return context;
};

export const PaginationProvider = ({ children }: ProviderProps) => {
  const paginationNumbers = [1, 2, 3, 4, 5, 6, 7, 8] as number[];
  const [number, setNumber] = useState<number>(0);

  const selectedPaginationNumber: number = paginationNumbers[number];

  const scroolToBegin = () => setTimeout(() => window.scrollTo(0, -100), 100);

  const setPageNumber = (item: number) => {
    scroolToBegin();
    setNumber(item - 1);
  };

  const previousPage = () => {
    number > 0 && setNumber(number - 1);
    number > 0 && scroolToBegin();
  };
  const nextPage = () => {
    scroolToBegin();
    number < 7 ? setNumber(number + 1) : setNumber(0);
  };

  return (
    <PaginationContext.Provider
      value={{
        selectedPaginationNumber,
        paginationNumbers,
        previousPage,
        nextPage,
        setPageNumber,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
