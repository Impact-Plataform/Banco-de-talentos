import cx from 'classnames';
import { createContext, ReactNode, useState } from 'react';

interface DarkModeProps {
  children: ReactNode;
}

export interface DarkModeContextData {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextData | null>(null);

export function DarkModeProvider({ children }: DarkModeProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div
        className={cx('h-screen w-screen', {
          'bg-gray-900 text-gray-100': darkMode,
          'bg-gray-100 text-gray-900': !darkMode,
        })}
      >
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}
