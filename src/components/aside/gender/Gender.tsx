'use client'
import { useContext } from 'react';
import { GenderContainer } from './gender.style';
import { AppContext } from '../../../contexts/contextProvider';


export default function Gender() {
  const { setGender } = useContext(AppContext);

  const handleGender = (target: any) => {
    setGender(target.getAttribute("value"))
  }

  return(
    <GenderContainer>
        <h3>Gênero</h3>
        <ul>
          <li value="male" onClick={ (e) => handleGender(e.target) }>masculino</li>
          <li value="female" onClick={ (e) => handleGender(e.target) }>feminino</li>
          <li value="unknown" onClick={ (e) => handleGender(e.target) }>desconhecido</li>
          <li value="n/a" onClick={ (e) => handleGender(e.target) }>não tem gênero</li>
        </ul>
      </GenderContainer>
  );
};
