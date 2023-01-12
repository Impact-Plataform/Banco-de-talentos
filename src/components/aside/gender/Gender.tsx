'use client'
import { useContext } from 'react';
import { GenderContainer } from './gender.style';
import { AppContext } from '../../../contexts/contextProvider';


export default function Gender() {
  const { setGender, setMenuIsVisible } = useContext(AppContext);

  const handleGender = (target: any, setMenuIsVisible: any) => {
    setGender(target.getAttribute("value"))
    setMenuIsVisible(false)
  }

  return(
    <GenderContainer>
        <h3>Gênero</h3>
        <ul>
          <li value="male" onClick={ (e) => handleGender(e.target, setMenuIsVisible) }>masculino</li>
          <li value="female" onClick={ (e) => handleGender(e.target, setMenuIsVisible) }>feminino</li>
          <li value="n/a" onClick={ (e) => handleGender(e.target, setMenuIsVisible) }>não tem gênero</li>
        </ul>
      </GenderContainer>
  );
};
