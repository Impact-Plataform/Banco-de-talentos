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
          'text-gray-100': darkMode,
          'text-gray-900': !darkMode,
        })}
      >
        <div
          className={cx('h-full w-full fixed -z-10', {
            'bg-gray-900': darkMode,
            'bg-gray-100': !darkMode,
          })}
        />
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}
