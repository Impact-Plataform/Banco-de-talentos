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
      className={cx('fixed top-0 w-full py-4 px-10 h-fit', {
        'bg-gray-800': darkMode,
        'bg-gray-600': !darkMode,
        'lg:flex lg:justify-between': mode === 'complete',
      })}
    >
      <div className={cx('flex flex-col w-full', 'sm:flex-row sm:justify-between')}>
        <div
          className={cx('w-14 hidden', 'sm:block', {
            'lg:order-last': mode === 'complete',
          })}
        />
        <Logo />
        <DarkModeToggle
          className={cx('self-end', 'sm:self-auto', {
            'lg:order-first': mode === 'complete',
          })}
        />
      </div>
      {mode === 'complete' && (
        <div
          className={cx(
            'mt-2',
            'sm:flex sm:flex-row sm:justify-around sm:mt-3',
            'lg:flex-col lg:m-0',
          )}
        >
          <SearchBar />
          <Filters className="mt-2 sm:m-0 lg:mt-2" />
        </div>
      )}
    </header>
  );
}
