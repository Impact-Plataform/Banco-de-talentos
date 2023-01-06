import cx from 'classnames';
import { Moon, Sun } from 'phosphor-react';
import { useContext } from 'react';

import { DarkModeContextData } from '../../interfaces/darkMode.interface';
import { DarkModeContext } from '../../providers/DarkMode';

export function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext) as DarkModeContextData;

  return (
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div
          className={cx(
            'flex flex-row w-14 rounded-full align-middle justify-between p-1',
            {
              'bg-gray-600': darkMode,
              'bg-gray-700': !darkMode,
            },
          )}
        >
          <Moon size={20} weight="bold" className="text-gray-900" />
          <Sun size={20} weight="bold" className="text-sw-yellow" />
        </div>
        <div
          className={cx('absolute top-[2px]  w-6 h-6 rounded-full transition', {
            'transform translate-x-full right-[26px] bg-sw-yellow': darkMode,
            'left-[2px] bg-gray-900': !darkMode,
          })}
        />
      </div>
    </label>
  );
}
