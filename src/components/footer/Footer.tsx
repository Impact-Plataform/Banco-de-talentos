'use client'
import React from 'react';
import { FooterContainer } from './footer.styles';


export default function Footer() {
  return(
    <FooterContainer>
      <footer>
        <p>Developed by <span>Willian Alves Batista</span>.</p>
        <p>All data were obtained from <span>SWAPI</span>.</p>
      </footer>
    </FooterContainer>
  );
}