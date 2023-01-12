import '../styles/globals.css';
import Link from 'next/link';
import Header from '../components/header/Header';
import Characters from '../components/characters/Characters';
import Aside from '../components/aside/Aside';
import Filter from '../components/filter/Filter';

export default function Home() {
  return(
  <>
    <Header/>
    <Filter/>
    <Aside/>
    <Characters />
    <Link href="/detailsCharacter">detailsCaracter</Link>
  </>
  );
}