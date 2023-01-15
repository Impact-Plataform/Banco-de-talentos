import { ApiinfoProvider } from "./providers/ApiData";
import { FilterProvider } from "./providers/Filter";
import { ProviderProps } from "./interfaces/providerProps";
import { PaginationProvider } from "./providers/Pagination";

export const IndexProvider = ({ children }: ProviderProps) => {
  return (
    <PaginationProvider>
      <ApiinfoProvider>
        <FilterProvider>{children}</FilterProvider>
      </ApiinfoProvider>
    </PaginationProvider>
  );
};
