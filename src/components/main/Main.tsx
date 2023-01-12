'use client'
import { MainContainer } from './main.styles';
import Aside from '../aside/Aside';
import Characters from '../characters/Characters';
import { useContext } from 'react';
import { AppContext } from '../../contexts/contextProvider';


export default function Main() {
	const {menuIsVisible, setMenuIsVisible} = useContext(AppContext);
	
	return(
		<MainContainer isVisible={menuIsVisible}>
			<Aside/>
			<Characters/>
		</MainContainer>
	);
} 