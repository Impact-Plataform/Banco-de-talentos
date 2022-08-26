import { images } from '../../assets/data/images'
import { Character } from '../../components/Character'
import { useCharacters } from '../../hooks/useCharacters'
import { Grid } from './styles'

export const Home = () => {
	const { state } = useCharacters()

	return (
		<Grid>
			{state.characters.map((char, i) => (
				<Character data={char} image={images.characters[char.name]} key={i}  />
			))}
		</Grid>
	)
}
