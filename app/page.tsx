'use client'
import '../styles/globals.css';
import Link from 'next/link';
import Header from '../components/header/Header';

export default function Home() {
  return(
  <>
    <Header/>
    <Link href="/detailsCaracter">detailsCaracter</Link>
  </>
  );
}