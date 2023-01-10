import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, PersonPage, SearchPage } from './pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
      </Route>
      {/* se não der match com nenhuma rota */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
