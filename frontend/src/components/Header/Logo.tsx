import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex flex-col items-center">
      <img src="./assets/star-wars-logo.png" alt="Star Wars logo" className="w-80" />
      <p className="text-sw-yellow font-bold text-lg tracking-wider mt-1">SWAPI CLient</p>
    </Link>
  );
}
