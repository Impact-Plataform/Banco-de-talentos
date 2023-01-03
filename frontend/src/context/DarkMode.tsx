import { createContext, ReactNode, useState } from 'react';

interface DarkModeProps {
  children: ReactNode;
}

interface DarkModeContextData {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextData | null>(null);

export function DarkModeProvider({ children }: DarkModeProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className="">{children}</div>
    </DarkModeContext.Provider>
  );
}
