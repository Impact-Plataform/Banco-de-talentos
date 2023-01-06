import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharactersProvider } from "./contexts/CharactersProvider/CharactersProvider";
import Detail from "./pages/Detail";
import { FiltersProvider } from "./contexts/FiltersProvider/FiltersProvider";

function App() {
  return (
    <CharactersProvider>
      <FiltersProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/:name" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </FiltersProvider>
    </CharactersProvider>
  );
}

export default App;
