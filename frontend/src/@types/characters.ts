export interface CharacterT {
	name: string
	birth_year: string
	eye_color: string
	gender: string
	hair_color: string
	height: string
	mass: string
	skin_color: string
	homeworld: string
	films: string[]
	species: string[]
	starships: string[]
	vehicles: string[]
	url: string
	created: string
	edited: string
}

export interface CharactersState {
	gender: string
	species: string
	film: string
	count: number
	name: string
	page: number
	totalPages: number
	open: string
	characters: CharacterT[]
}

export interface CharactersAction {
	type: string
	payload?: Partial<CharactersState>
}
