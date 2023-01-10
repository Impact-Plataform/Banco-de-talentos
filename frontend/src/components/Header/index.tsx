import cx from 'classnames';

import { useDarkMode } from '../../providers/DarkMode';
import { DarkModeToggle } from './DarkModeToggle';
import { Filters } from './Filters';
import { Logo } from './Logo';
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
      <Logo />
      <div className="flex flex-row justify-around">
        <SearchBar />
        <DarkModeToggle />
      </div>
      <Filters />
    </header>
  );
}
