import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { SWContext } from '../contexts/SWContext'
import { CharactersCard } from './CharactersCard'

export function GroupCharacters() {
	const { characters, noDataFound, planets } = useContext(SWContext)

	const planetsNames = characters.map((char) => {
		const matching = planets.find((planet) => planet.url === char.homeworld)

		return { name: matching!.name, url: matching!.url }
	})

	return (
		<div className="flex flex-col gap-4 items-center justify-center md:flex-wrap md:flex-row">
			{characters?.length === 0 && <p>{noDataFound}</p>}
			{characters?.map((character) => {
				const characterBirthPlace = planetsNames.find(
					(planet) => planet.url === character.homeworld
				)

				const altImagesContent = {
					id: character.url.match(/\d+/)!.toString(),
					name: character.name,
				}

				return (
					<CharactersCard
						info={altImagesContent}
						character={character}
						birthplace={characterBirthPlace!.name}
						key={nanoid()}
					/>
				)
			})}
		</div>
	)
}
