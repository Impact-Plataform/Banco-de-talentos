import Home from "./pages/Home";
import P from "prop-types";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CharactersProvider } from "./contexts/CharactersProvider/CharactersProvider";
import Detail from "./pages/Detail";
import { FiltersProvider } from "./contexts/FiltersProvider/FiltersProvider";
import { useEffect } from "react";
import { scrollToTop } from "./components";

function ScrollTop({ children }) {
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location]);
  return <>{children}</>;
}

function App() {
  return (
    <CharactersProvider>
      <FiltersProvider>
        <BrowserRouter>
          <ScrollTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/character/:name" element={<Detail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </ScrollTop>
        </BrowserRouter>
      </FiltersProvider>
    </CharactersProvider>
  );
}

ScrollTop.propTypes = {
  children: P.object,
};

export default App;
