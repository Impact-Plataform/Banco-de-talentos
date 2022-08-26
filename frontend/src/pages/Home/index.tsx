import { useCharacters } from '../../hooks/useCharacters'

export const Home = () => {
	const { state } = useCharacters()

	return (
		<div>
			{state.characters.map(({ name }, i) => (
				<h1 key={i}>{name}</h1>
			))}
		</div>
	)
}
