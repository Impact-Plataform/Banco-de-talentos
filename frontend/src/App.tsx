import { Route, Routes } from 'react-router-dom';

import { CharacterDetail, Home } from './pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:characterName" element={<CharacterDetail />} />
    </Routes>
  );
}
