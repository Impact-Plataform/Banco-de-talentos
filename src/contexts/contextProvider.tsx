'use client'
import React, { createContext, useState } from 'react';


interface AppContextInterface {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  gender: string | undefined,
  setGender: React.Dispatch<React.SetStateAction<any>>,
}

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);

// Provider in your app

const AppProvider = ({ children }: Props) => {
  const [page, setPage] = useState(0);
  const [gender, setGender] = useState();


  const context = {
    page,
    setPage,
    gender,
    setGender
  }

  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  )
};

export default AppProvider;