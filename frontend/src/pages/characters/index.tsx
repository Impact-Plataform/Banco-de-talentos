import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrayPropT, CharacterT, FilmT, SpeciesT, StarshipT, VehicleT } from '../../@types/characters'
import { images } from '../../assets/data/images'
import { Bullet } from '../../components/Bullet'
import { Loader } from '../../components/Loader'
import { useCharacters } from '../../hooks/useCharacters'
import { swapi } from '../../services/swapi'
import { filterCharacterEntries } from '../../utils/filterCharacterEntries'
import { Container, Content, Image, Title, Grid, MoreInfo, Divider, TextContainer } from './styles'

export const Characters = () => {
	const { name } = useParams()
	const { state } = useCharacters()
	const [selected, setSelected] = useState<CharacterT>()
	const navigate = useNavigate()
	const moreInfo: ArrayPropT[] = [
		'films',
		'species',
		'starships',
		'vehicles',
	]

	useEffect(() => {
		const fetchCharacter = async () => {
			const result = await swapi(1, name)
			if (result.count > 0) {
				const character = result.results[0]

				character.homeworld =
          state.planets.find((p) => p.url === character.homeworld)?.name || ''

				moreInfo.forEach(item => {
					character[item] = character[item].map(url => {
						const found = (state[item] as Array<FilmT | SpeciesT | StarshipT | VehicleT>).find((i: { url: string }) => i.url === url)
						return (found as FilmT)?.title || (found as SpeciesT | StarshipT | VehicleT)?.name
					})
				})
				setSelected(character)
				console.log({ character })
			}
		}
		fetchCharacter()
	}, [state.films, state.species, state.starships, state.vehicles, state.planets])

	const basicInfo = [
		'mass',
		'height',
		'gender',
		'eye_color',
		'hair_color',
		'skin_color',
		'birth_year',
		'homeworld',
	]

	const info = filterCharacterEntries(selected, basicInfo)

	return (
		<Container>
			{
				selected ?
					<>
						<Title>
							<span onClick={() => navigate('/')}>&#10142;</span>
							{name}
						</Title>
						<Content>
							<Image src={images.characters[name as string]} />
							<TextContainer>
								<Grid>
									{info.map((i) => (
										i[1] ? <Bullet color='#ccc' key={i[0]} info={i as [string, string]} /> : <Loader width={40} height={30} />
									))}
								</Grid>
								<Divider />
								<MoreInfo>
									{
										selected && moreInfo.map(i => {
											const current = (selected as CharacterT)[i]
											return current.length > 0 && (current[0] ? <Bullet color='#ccc' key={i} info={[i, current?.join(', ')]} /> : <Loader width={40} height={30} />)
										})
									}
								</MoreInfo>
							</TextContainer>
						</Content>
					</>
					:
					<div style={{margin: '0 auto'}}>
						<Loader />
					</div>
			}
		</Container>
	)
}
