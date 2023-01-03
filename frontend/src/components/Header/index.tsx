import cx from 'classnames';
import { useContext } from 'react';

import { DarkModeContext, DarkModeContextData } from '../../providers/DarkMode';
import { DarkModeToggle } from './DarkModeToggle';

export function Header() {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextData;

  return (
    <div
      className={cx('fixed top-0 w-full flex flex-row justify-between py-4 px-10', {
        'bg-gray-500': darkMode,
        'bg-gray-600': !darkMode,
      })}
    >
      SWAPI Client
      <DarkModeToggle />
    </div>
  );
}
