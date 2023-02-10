import { IPeople } from 'swapi-ts'

type characterType = {
	character: IPeople
	birthplace: string
}

export function CharactersCard({ character, birthplace }: characterType) {
	return (
		<>
			<div className="border border-white rounded-md py-2 px-3 flex flex-col w-[70%]">
				<h3>{character.name}</h3>
				<span className="font-bold">
					{character.gender}, from {birthplace}
				</span>
				<div className="text-xs">
					<p>heigth: {character.height}</p>
					<p>hair color: {character.hair_color}</p>
					<p>eye color: {character.eye_color}</p>
					<p>birth year: {character.birth_year}</p>
				</div>

				<button className="font-bold">+ click for more</button>
			</div>
		</>
	)
}
