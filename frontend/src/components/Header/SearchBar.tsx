import cx from 'classnames';
import { FormEvent, useState } from 'react';

import { useCharacters } from '../../providers/Characters';
import { useDarkMode } from '../../providers/DarkMode';

export function SearchBar() {
  const [char, setChar] = useState<string>('');

  const { setSearch } = useCharacters();
  const { darkMode } = useDarkMode();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(char);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={cx('relative rounded-md h-fit', 'sm:w-[270px]', {
        'bg-gray-900': darkMode,
        'bg-gray-100': !darkMode,
      })}
    >
      <input
        type="search"
        className="block bg-inherit p-1 rounded-md pl-6 w-full"
        placeholder="Search"
        value={char}
        onChange={({ target }) => setChar(target.value)}
        required
      />
      <button
        type="submit"
        className={cx('absolute bottom-0 right-0 px-2 p-1 border-l-2', {
          'border-gray-800': darkMode,
          'border-gray-600': !darkMode,
        })}
      >
        Search
      </button>
    </form>
  );
}
