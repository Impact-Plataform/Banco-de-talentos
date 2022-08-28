import { useEffect, useMemo, useRef, useState } from 'react'
import { images } from '../../assets/data/images'
import { Character } from '../../components/Character'
import { useCharacters } from '../../hooks/useCharacters'
import { swapi } from '../../services/swapi'
import { Grid, View } from './styles'
import { filterCharacters } from '../../utils/filterCharacters'
import { Filters } from './components/Filters'
import { Loader } from './components/Loader'
import { Modal } from '../../components/Modal'

export const Homepage = () => {
	const {
		state,
		dispatch,
		setAllAction,
		nextPageAction,
		addCharactersAction,
		setNameAction,
		setPageAction,
	} = useCharacters()
	const characters = useMemo(
		() =>
			filterCharacters(
				state.characters,
				state.gender,
				state.film,
				state.specie
			),
		[state.gender, state.film, state.specie, state.characters]
	)
	const [hasEndingCards, setHasEndingCards] = useState(false)
	const loaderRef = useRef(null)
	const intervalId = useRef(0)
	const search = useRef(state.name)
	const loading = state.films.length === 0 || state.species.length === 0

	useEffect(() => {
		fetchByPage()
	}, [state.page])

	useEffect(() => {
		search.current = state.name
		dispatch(setPageAction({ page: 1, totalPages: 9999 }))
		fetchByName()
	}, [state.name])

	const fetchByPage = async () => {
		if (hasEndingCards) return

		const { count, results: characters } = await swapi(state.page, state.name)
		const totalPages = Math.ceil(count / characters.length)

		if (state.page === 1)
			dispatch(setAllAction({ count, characters, totalPages }))
		else dispatch(addCharactersAction({ characters }))

		state.page === state.totalPages && setHasEndingCards(true)
	}

	const fetchByName = async () => {
		setHasEndingCards(false)

		const { count, results: characters } = await swapi(1, state.name)
		const totalPages = Math.ceil(count / characters.length)

		state.name === search.current &&
      dispatch(setAllAction({ count, characters, totalPages }))
		totalPages === 1 && setHasEndingCards(true)
	}

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '20px',
			threshold: 1.0,
		}

		const observer = new IntersectionObserver((entities) => {
			const target = entities[0]

			if (target.isIntersecting) {
				intervalId.current = setInterval(() => dispatch(nextPageAction()), 500)
			} else {
				if (intervalId.current !== 0) {
					clearInterval(intervalId.current)
				}
			}
		}, options)

		if (loaderRef.current) {
			observer.observe(loaderRef.current)
		}

		return () => {
			if (loaderRef.current) {
				observer.unobserve(loaderRef.current)
			}
		}
	}, [])

	return (
		<View>
			{state.open && (
				<Modal
					data={characters.find((c) => c.name === state.open)}
					image={images.characters[state.open]}
				/>
			)}
			{loading ? (
				<Loader />
			) : (
				<>
					<input
						type='search'
						value={state.name}
						onChange={(e) => dispatch(setNameAction({ name: e.target.value }))}
					/>
					<Filters />
					<Grid>
						{characters.map((char, i) => (
							<Character
								data={char}
								image={images.characters[char.name]}
								key={i}
							/>
						))}
					</Grid>
				</>
			)}

			<div
				ref={loaderRef}
				style={{
					display:
            state.characters.length === 0
						|| hasEndingCards
						|| loading ? 'none' : 'inline-block',
				}}
			>
				<Loader />
			</div>
		</View>
	)
}
