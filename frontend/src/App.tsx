import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Reset } from 'styled-reset'
import { ACTIONS } from './contexts/charactersContext'
import { GlobalStyle } from './globalStyles'
import { useCharacters } from './hooks/useCharacters'
import { swapi } from './services/swapi'

export const App = () => {
	const { state, dispatch } = useCharacters()

	useEffect(() => {
		const fetchCharacters = async () => {
			const { count, results: characters } = await swapi()
			dispatch({ type: ACTIONS.SET_ALL, payload: { count, characters } })
		}
		fetchCharacters()
	}, [state?.page])

	return (
		<>
			<Reset />
			<GlobalStyle />
			<Outlet />
		</>
	)
}
