"use client"
import React, { createContext } from "react";


interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextInterface | null>(null);

// Provider in your app

const sampleAppContext: AppContextInterface = {
  name: "Using React Context in a Typescript App",
  author: "thehappybug",
  url: "http://www.example.com",
};

const AppProvider = ({ children }: Props) => (
  <AppContext.Provider value={sampleAppContext}>{children}</AppContext.Provider>
);

export default AppProvider;

// Consume in your app
// import { useContext } from "react";

// export const PostInfo = () => {
//   const appContext = useContext(AppCtx);
//   return (
//     <div>
//       Name: {appContext!.name}, Author: {appContext!.author}, Url:{" "}
//       {appContext!.url}
//     </div>
//   );
// };