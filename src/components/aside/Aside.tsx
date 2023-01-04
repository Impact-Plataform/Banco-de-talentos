'use client'
import { useContext } from 'react';
import { AsideContainer, GenderContainer } from './aside.style';
import { AppContext } from '../../contexts/contextProvider';


export default function Aside() {
  const { setGender } = useContext(AppContext);

  const handleGender = (target: any) => {
    setGender(target.getAttribute('value'))
  }

  return(
    <AsideContainer>
      <GenderContainer>
        <h3>Gênero</h3>
        <ul>
          <li value="male" onClick={ (e) => handleGender(e.target) }>masculino</li>
          <li value="female" onClick={ (e) => handleGender(e.target) }>feminino</li>
          <li value="unknown" onClick={ (e) => handleGender(e.target) }>desconhecido</li>
          <li value="n/a" onClick={ (e) => handleGender(e.target) }>não tem gênero</li>
        </ul>
      </GenderContainer>
    </AsideContainer>
  );
}
