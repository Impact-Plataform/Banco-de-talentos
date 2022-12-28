'use client'
import '../styles/globals.css';
import Link from 'next/link';
import Header from '../components/header/Header';
import People from '../components/character/Characters';

export default function Home() {
  return(
  <>
    <Header/>
    <People />
    <Link href="/detailsCaracter">detailsCaracter</Link>
  </>
  );
}