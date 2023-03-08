import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IPeople, People } from 'swapi-ts'
import { nanoid } from 'nanoid'
import { ContentSchema, SWContext } from '../../contexts/SWContext'
import { Header } from '../../components/Header'
import NavigationBar from '../../components/NavigationBar'
import CharacterHeader from '../../components/singleCharacterPage/CharacterHeader'
import { CharacterInfo } from '../../components/singleCharacterPage/CharacterInfo'
import { getTitleByUrl } from '../../utils/getTitleByUrl'
import { GroupInfo } from '../../components/singleCharacterPage/GroupInfo'

type urlTypes = {
	name: string
}

export function CharacterPage() {
	const { planets, films, starships } = useContext(SWContext)

	const urlParams = useParams<urlTypes>()
	const characterName = urlParams.name

	const [character, setCharacter] = useState<IPeople>()

	useEffect(() => {
		async function loadCharacter() {
			const getCharacterBySearch = (
				await People.findBySearch([characterName])
			).resources.map((item) => item.value)[0]
			if (getCharacterBySearch) {
				setCharacter(getCharacterBySearch)
			}
		}
		loadCharacter()
	}, [])

	const characterId = character?.url.match(/\d+/)!.toString()

	const result = character && Object.entries(character).slice(1, 8)

	const hometown =
		character?.homeworld &&
		planets.find((planet) => planet.url === character.homeworld)?.name

	return (
		<div className="flex flex-col gap-4">
			<Header />

			<NavigationBar />

			<div className="border border-white rounded-md py-2 px-3 flex flex-col md:flex-row items-center md:items-start gap-3">
				{characterId && (
					<img
						src={require(`../../assets/characters-images/${characterId}.jpg`)}
						alt={`${character?.name}'s on schene`}
					/>
				)}
				{character && (
					<div className="flex flex-col gap-4">
						<CharacterHeader
							characterName={character.name}
							homeworld={hometown as string}
						/>

						<ul>
							{result &&
								result.map((item) => (
									<CharacterInfo
										key={nanoid()}
										dataLabel={item[0]}
										data={item[1]}
									/>
								))}
						</ul>

						<GroupInfo
							sectionTitle="Films"
							charContentArray={character.films as string[]}
							rawDataArray={films as ContentSchema[]}
						/>

						<GroupInfo
							sectionTitle="Starships"
							charContentArray={character.starships as string[]}
							rawDataArray={starships as ContentSchema[]}
						/>
					</div>
				)}
			</div>
		</div>
	)
}
