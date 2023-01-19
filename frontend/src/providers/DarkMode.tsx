import cx from 'classnames';
import { createContext, ReactNode, useContext, useState } from 'react';

import { DarkModeContextData } from '../interfaces/darkMode.interface';

interface DarkModeProps {
  children: ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextData | null>(null);

export function DarkModeProvider({ children }: DarkModeProps) {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div
        className={cx('h-screen w-screen', {
          'text-gray-100': darkMode,
          'text-gray-900': !darkMode,
        })}
      >
        <div
          className={cx('h-full w-full fixed -z-10', {
            'bg-gray-900': darkMode,
            'bg-gray-50': !darkMode,
          })}
        />
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext) as DarkModeContextData;
