import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../services/api";
import { ProviderProps } from "../interfaces/providerProps";
import { usePageNumber } from "./Pagination";

interface ContextProps {
  data: any[];
}

const ApiInfoContext = createContext<ContextProps>({} as ContextProps);

export const useAPiInfo = () => {
  const context = useContext(ApiInfoContext);
  return context;
};

export const ApiinfoProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<any[]>([]);

  const { selectedPaginationNumber } = usePageNumber();

  useEffect(() => {
    api
      .get(`/people/?page=${selectedPaginationNumber}`)
      .then((res) => setData(res.data.results));
  }, []);

  return (
    <ApiInfoContext.Provider value={{ data }}>
      {children}
    </ApiInfoContext.Provider>
  );
};
