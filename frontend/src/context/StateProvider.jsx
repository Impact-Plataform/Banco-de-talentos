import React, { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);

  const context = {
    info: info,
    setInfo: setInfo,
    page: page,
    setPage : setPage
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
