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

export interface FilmT {
	title: string
	episode_id: number
	opening_crawl: string
	director: string
	producer: string
	release_date: Date
	species: string[]
	starships: string[]
	vehicles: string[]
	characters: string[]
	planets: string[]
	url: string
	created: string
	edited: string
}

export interface SpeciesT {
	name: string
	classification: string
	designation: string
	average_height: string
	average_lifespan: string
	eye_colors: string
	hair_colors: string
	skin_colors: string
	language: string
	homeworld: string
	people: string[]
	films: string[]
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
	films: FilmT[]
	allSpecies: SpeciesT[]
}

export interface CharactersAction {
	type: string
	payload?: Partial<CharactersState>
}
