import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IPeople, People } from 'swapi-ts'

type urlTypes = {
	name: string
}

export function CharacterPage() {
	const urlParams = useParams<urlTypes>()
	const characterName = urlParams.name

	const [loading, setLoading] = useState(true)
	const [character, setCharacter] = useState<IPeople>()

	useEffect(() => {
		async function loadCharacter() {
			const getCharacterBySearch = (
				await People.findBySearch([characterName])
			).resources.map((item) => item.value)
			if (getCharacterBySearch.length !== 0) {
				setCharacter(getCharacterBySearch[0])
			}
			console.log(getCharacterBySearch)
		}
		loadCharacter()
		setLoading(false)
	}, [])

	return (
		<>
			{loading && <p>loading...</p>}
			{!loading && <div>ola, {character?.name}</div>}
		</>
	)
}
