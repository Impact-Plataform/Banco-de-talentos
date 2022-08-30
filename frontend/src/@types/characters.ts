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

export interface PlanetT {
	name: string
	diameter: string
	rotation_period: string
	orbital_period: string
	gravity: string
	population: string
	climate: string
	terrain: string
	surface_water: string
	residents: string[]
	films: string[]
	url: string
	created: string
	edited: string
}

export interface StarshipT {
	name: string
	model: string
	starship_class: string
	manufacturer: string
	cost_in_credits: string
	length: string
	crew: string
	passengers: string
	max_atmosphering_speed: string
	hyperdrive_rating: string
	MGLT: string
	cargo_capacity: string
	consumables: string
	films: string[]
	pilots: string[]
	url: string
	created: string
	edited: string
}

export interface VehicleT {
	name: string
	model: string
	vehicle_class: string
	manufacturer: string
	length: string
	cost_in_credits: string
	crew: string
	passengers: string
	max_atmosphering_speed: string
	cargo_capacity: string
	consumables: string
	films: string[]
	pilots: string[]
	url: string
	created: string
	edited: string
}

export interface CharactersState {
	gender: string
	specie: string
	film: string
	count: number
	name: string
	prevName: string
	page: number
	prevPage: number
	totalPages: number
	open: string
	init: boolean
	characters: CharacterT[]
	films: FilmT[]
	species: SpeciesT[],
	planets: PlanetT[],
	starships: StarshipT[],
	vehicles: VehicleT[],
}

export type ArrayPropT = 'films' | 'species' | 'starships' | 'vehicles'

export interface CharactersAction {
	type: string
	payload?: Partial<CharactersState>
}

export type CharactersActionFn = (payload: Partial<CharactersState>) => CharactersAction
