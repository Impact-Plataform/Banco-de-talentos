import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Reset } from 'styled-reset'
import { CharactersActionFn, CharacterT } from './@types/characters'
import { GlobalStyle } from './globalStyles'
import { useCharacters } from './hooks/useCharacters'
import { swapi } from './services/swapi'

export const App = () => {
	const { dispatch, setFilmsAction, setSpeciesAction, setPlanetsAction, setStarshipsAction, setVehiclesAction } = useCharacters()

	const fetchData = async (type: string, setFn: CharactersActionFn) => {
		const data = []
		const { count, results } = await swapi(1, '', type)
		const totalPages = Math.ceil(count / results.length)

		const allResults = await Promise.all(
			Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map(
				async (n) => await swapi(n, '', type)
			)
		)

		data.push(
			...results,
			...allResults.reduce(
				(acc: CharacterT[], cur) => [...acc, ...cur.results],
				[]
			)
		)

		dispatch(setFn({ [type]: data }))
	}

	useEffect(() => {
		fetchData('films', setFilmsAction)
		fetchData('species', setSpeciesAction)
		fetchData('planets', setPlanetsAction)
		fetchData('starships', setStarshipsAction)
		fetchData('vehicles', setVehiclesAction)
	}, [])

	return (
		<>
			<Reset />
			<GlobalStyle />
			<Outlet />
		</>
	)
}
