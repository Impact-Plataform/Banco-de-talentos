import cx from 'classnames';

import { useDarkMode } from '../../providers/DarkMode';
import { DarkModeToggle } from './DarkModeToggle';
import { Filters } from './Filters';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';

interface HeaderProps {
  mode: 'complete' | 'simplified';
}

export function Header({ mode }: HeaderProps) {
  const { darkMode } = useDarkMode();
  return (
    <header
      className={cx(
        'fixed top-0 w-full py-4 px-10 h-fit flex flex-col',
        'sm:flex-row sm: justify-between',
        {
          'bg-gray-800': darkMode,
          'bg-gray-600': !darkMode,
        },
      )}
    >
      <div className="w-14 hidden sm:block" />
      <Logo />
      <DarkModeToggle className="self-end sm:self-auto" />
      {mode === 'complete' && (
        <div className="mt-2">
          <SearchBar />
          <Filters className="mt-2" />
        </div>
      )}
    </header>
  );
}
