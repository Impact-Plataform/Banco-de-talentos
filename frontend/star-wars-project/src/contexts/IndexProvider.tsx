import { ApiinfoProvider } from "./providers/ApiData";
import { FilterProvider } from "./providers/Filter";
import { ProviderProps } from "./interfaces/providerProps";
import { PaginationProvider } from "./providers/Pagination";
import { SpeciesProvider } from "./providers/Species";
import { FilmsProvider } from "./providers/Films";

export const IndexProvider = ({ children }: ProviderProps) => {
  return (
    <PaginationProvider>
      <ApiinfoProvider>
        <FilterProvider>
          <FilmsProvider>
            <SpeciesProvider>{children}</SpeciesProvider>
          </FilmsProvider>
        </FilterProvider>
      </ApiinfoProvider>
    </PaginationProvider>
  );
};
