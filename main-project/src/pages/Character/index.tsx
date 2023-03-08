import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IPeople, People } from 'swapi-ts'
import { nanoid } from 'nanoid'
import { SWContext } from '../../contexts/SWContext'
import { Header } from '../../components/Header'
import NavigationBar from '../../components/NavigationBar'

type urlTypes = {
	name: string
}

export function CharacterPage() {
	const { planets } = useContext(SWContext)

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
			console.log(getCharacterBySearch)
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

			<div className="border border-white rounded-md py-2 px-3 flex flex-col items-center gap-3">
				{characterId && (
					<img
						src={require(`../../assets/characters-images/${characterId}.jpg`)}
						alt={`${character?.name}'s on schene`}
					/>
				)}
				{character && (
					<div>
						<h1 className="text-center">{character.name}</h1>
						<p className="font-bold">from {hometown}</p>

						<ul>
							{result &&
								result.map((item) => (
									<li key={nanoid()} className="text-sm">
										<span className="font-bold">
											{item[0].replace('_', ' ')}:
										</span>
										<span> {item[1]}</span>
									</li>
								))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}
