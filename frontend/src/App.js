import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharactersProvider } from "./contexts/CharactersProvider/CharactersProvider";
import Detail from "./pages/Detail";

function App() {
  return (
    <CharactersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/:name" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CharactersProvider>
  );
}

export default App;
