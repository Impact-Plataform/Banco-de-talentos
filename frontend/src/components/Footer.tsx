import cx from 'classnames';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';

import { useDarkMode } from '../providers/DarkMode';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={cx(
        'w-full py-4 px-10 h-fit flex flex-col items-center',
        'sm:flex sm:flex-row sm:justify-between',
        className,
        {
          'bg-gray-800': darkMode,
          'bg-gray-600': !darkMode,
        },
      )}
    >
      <p className="">SWAPI Client</p>
      <div className={cx('flex flex-row justify-between w-fit mt-2', 'sm:flex-col')}>
        <a
          href="https://www.linkedin.com/in/filipefpaulo/"
          className="flex flex-row"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size={20} weight="bold" />
          filipefpaulo
        </a>
        <a
          href="https://github.com/filipefpaulo/JEDI-banco-de-talentos"
          className="flex flex-row"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={20} weight="bold" />
          source
        </a>
      </div>
    </footer>
  );
}
