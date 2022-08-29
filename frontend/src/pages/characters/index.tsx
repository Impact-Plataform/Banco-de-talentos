import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CharacterT, FilmT, SpeciesT, StarshipT, VehicleT } from '../../@types/characters'
import { images } from '../../assets/data/images'
import { Bullet } from '../../components/Bullet'
import { useCharacters } from '../../hooks/useCharacters'
import { swapi } from '../../services/swapi'
import { filterCharacterEntries } from '../../utils/filterCharacterEntries'
import { Container, Content, Image, Title, Grid } from './styles'

export const Characters = () => {
	const { name } = useParams()
	const { state } = useCharacters()
	const [selected, setSelected] = useState<CharacterT>()
	const navigate = useNavigate()

	useEffect(() => {
		const fetchCharacter = async () => {
			const result = await swapi(1, name)
			if (result.count > 0) {
				const character = result.results[0]
				type PropT = 'films' | 'species' | 'starships' | 'vehicles'
				const properties: PropT[]  = ['films', 'species', 'starships', 'vehicles']

				character.homeworld =
          state.planets.find((p) => p.url === character.homeworld)?.name || ''

				properties.forEach(item => {
					character[item] = character[item].map(url => {
						const found = (state[item] as Array<FilmT | SpeciesT | StarshipT | VehicleT>).find((i: { url: string }) => i.url === url)
						return (found as FilmT).title || (found as SpeciesT | StarshipT | VehicleT).name
					})
				})
				setSelected(character)
			}
		}
		fetchCharacter()
	}, [])

	const showInfo = [
		'mass',
		'height',
		'gender',
		'eye_color',
		'hair_color',
		'skin_color',
		'birth_year',
		'homeworld',
	]

	const info = filterCharacterEntries(selected, showInfo)

	return (
		<Container>
			<Title>
				<span onClick={() => navigate('/')}>&#10142;</span>
				{name}
			</Title>
			<Content>
				<Image src={images.characters[name as string]} />
				<Grid>
					{info.map((i) => (
						<Bullet color='#ccc' key={i[0]} info={i as [string, string]} />
					))}
				</Grid>
			</Content>
		</Container>
	)
}
