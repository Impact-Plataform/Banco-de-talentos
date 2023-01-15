import { ApiinfoProvider } from "./ApiData";
import { FilterProvider } from "./filter";
import { ProviderProps } from "./interfaces/providerProps";
import { PaginationProvider } from "./Pagination";

export const ContextProvider = ({ children }: ProviderProps) => {
  return (
    <PaginationProvider>
      <ApiinfoProvider>
        <FilterProvider>{children}</FilterProvider>
      </ApiinfoProvider>
    </PaginationProvider>
  );
};
