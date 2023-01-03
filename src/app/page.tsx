import '../styles/globals.css';
import Link from 'next/link';
import Header from '../components/header/Header';
import Characters from '../components/character/Characters';

export default function Home() {
  return(
  <>
    <Header/>
    <Characters />
    <Link href="/detailsCaracter">detailsCaracter</Link>
  </>
  );
}