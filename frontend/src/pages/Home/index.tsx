import { useEffect, useRef } from 'react'
import { images } from '../../assets/data/images'
import { Character } from '../../components/Character'
import { useCharacters } from '../../hooks/useCharacters'
import { swapi } from '../../services/swapi'
import { Grid, View } from './styles'
import { ThreeDots } from 'react-loader-spinner'

export const Home = () => {
	const {
		state,
		dispatch,
		setAllAction,
		nextPageAction,
		addCharactersAction,
	} = useCharacters()
	const hasEndingCards = state.page > state.totalPages
	const loaderRef = useRef(null)

	useEffect(() => {
		fetchCharacters()
	}, [state.page])

	const fetchCharacters = async () => {
		if (hasEndingCards) return

		const { count, results: characters } = await swapi(state.page, state.name)
		const totalPages = Math.ceil(count / characters.length)

		if (state.page === 1)
			dispatch(setAllAction({ count, characters, totalPages }))
		else dispatch(addCharactersAction({ characters }))
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
				dispatch(nextPageAction())
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
			<Grid>
				{state.characters.map((char, i) => (
					<Character data={char} image={images.characters[char.name]} key={i} />
				))}
			</Grid>

			<div
				ref={loaderRef}
				style={{
					display: state.characters.length === 0 || hasEndingCards ? 'none' : 'inline-block',
				}}
			>
				<ThreeDots
					height='80'
					width='80'
					color='#666'
					ariaLabel='three-dots-loading'
					visible={true}
				/>
			</div>
		</View>
	)
}
