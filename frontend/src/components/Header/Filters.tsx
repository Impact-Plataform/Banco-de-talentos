import cx from 'classnames';
import { useState } from 'react';

import { buildFilters } from '../../helpers/buildFilters';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { useCharacters } from '../../providers/Characters';
import { useDarkMode } from '../../providers/DarkMode';

interface FiltersProps {
  className?: string;
}

export function Filters({ className }: FiltersProps) {
  const { darkMode } = useDarkMode();
  const { changeFilters, filters } = useCharacters();

  const allFilters = buildFilters();

  const [filterToShow, setFilterToShow] = useState<string>(Object.keys(allFilters)[0]);

  return (
    <div
      className={cx('flex rounded-md h-fit', 'sm:w-[270px]', className, {
        'bg-gray-900': darkMode,
        'bg-gray-100': !darkMode,
      })}
    >
      <select
        onChange={({ target }) => setFilterToShow(target.value)}
        className="bg-inherit px-3 rounded-l-md"
      >
        {Object.keys(allFilters).map((filterType, index) => (
          <option key={index} value={filterType} className="bg-inherit">
            {capitalizeFirstLetter(filterType)}
          </option>
        ))}
      </select>
      <select
        className="bg-inherit w-full px-3 rounded-r-md border-l-2 p-1 border-gray-800 ml-[1]"
        onChange={({ target }) => changeFilters({ [filterToShow]: target.value })}
      >
        <option value="">Select</option>
        {allFilters[filterToShow]?.map(({ name, filter }, index) => (
          <option
            key={index}
            defaultChecked={filters[filterToShow] === filter}
            value={filter}
            className="bg-inherit"
          >
            {capitalizeFirstLetter(name as string)}
          </option>
        ))}
      </select>
    </div>
  );
}
