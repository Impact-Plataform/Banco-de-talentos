import cx from 'classnames';
import { useContext } from 'react';

import { DarkModeContext, DarkModeContextData } from '../../providers/DarkMode';
import { DarkModeToggle } from './DarkModeToggle';

export function Header() {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextData;

  return (
    <header
      className={cx('fixed top-0 w-full flex flex-row justify-between py-4 px-10', {
        'bg-gray-500': darkMode,
        'bg-gray-600': !darkMode,
      })}
    >
      <div className="flex flex-col items-center">
        <img src="/src/assets/star-wars-logo.png" alt="Star Wars logo" className="w-80" />
        <p className="text-sw-yellow font-bold text-lg tracking-wider">SWAPI CLient</p>
      </div>
      <div className="w-9" /> {/*Block separator*/}
      <DarkModeToggle />
    </header>
  );
}
