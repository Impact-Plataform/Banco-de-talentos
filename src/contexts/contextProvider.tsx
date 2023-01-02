'use client'
import React, { createContext, useState } from 'react';


interface AppContextInterface {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);

// Provider in your app

const AppProvider = ({ children }: Props) => {
  const [page, setPage] = useState(8);
  

  const context = {
    page,
    setPage,
  }

  return (
    <AppContext.Provider value={ {page, setPage} }>{children}</AppContext.Provider>
  )
};

export default AppProvider;