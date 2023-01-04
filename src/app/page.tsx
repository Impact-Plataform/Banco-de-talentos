import '../styles/globals.css';
import Link from 'next/link';
import Header from '../components/header/Header';
import Characters from '../components/character/Characters';
import Aside from '../components/aside/Aside';

export default function Home() {
  return(
  <>
    <Header/>
    <Aside/>
    <Characters />
    <Link href="/detailsCaracter">detailsCaracter</Link>
  </>
  );
}