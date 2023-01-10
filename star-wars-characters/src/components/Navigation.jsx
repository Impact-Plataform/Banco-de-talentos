import React from 'react';
import { Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <h1>Navegation</h1>
      <Outlet />
    </div>
  );
};
