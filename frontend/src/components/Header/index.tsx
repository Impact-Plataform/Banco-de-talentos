import cx from 'classnames';

import { useDarkMode } from '../../providers/DarkMode';
import { DarkModeToggle } from './DarkModeToggle';
import { Filters } from './Filters';
import { SearchBar } from './SearchBar';

export function Header() {
  const { darkMode } = useDarkMode();

  return (
    <header
      className={cx('fixed top-0 w-full py-4 px-10 h-fit', {
        'bg-gray-800': darkMode,
        'bg-gray-600': !darkMode,
      })}
    >
      <div className="flex flex-col items-center">
        <img src="/src/assets/star-wars-logo.png" alt="Star Wars logo" className="w-80" />
        <p className="text-sw-yellow font-bold text-lg tracking-wider mt-1">
          SWAPI CLient
        </p>
      </div>
      <div className="flex flex-row justify-around mt-2">
        <SearchBar />
        <DarkModeToggle />
      </div>
      <Filters />
    </header>
  );
}
