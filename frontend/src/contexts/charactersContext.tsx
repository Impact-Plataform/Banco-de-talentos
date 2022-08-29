import { createContext, Dispatch, ReactElement, useReducer } from 'react'
import { CharactersAction, CharactersState } from '../@types/characters'

export const initialState: CharactersState = {
	gender: '',
	specie: '',
	film: '',
	count: 0,
	name: '',
	page: 1,
	totalPages: 9999,
	open: '',
	characters: [],
	films: [],
	species: [],
	planets: [],
	starships: [],
	vehicles: [],
}

export const ACTIONS = {
	SET_COUNT: 'set_count',
	SET_PAGE: 'set_page',
	CLEAR_COUNT: 'clear_count',
	SET_FILMS: 'set_films',
	ADD_FILMS: 'add_films',
	CLEAR_FILMS: 'clear_films',
	SET_PLANETS: 'set_planets',
	ADD_PLANETS: 'add_planets',
	CLEAR_PLANETS: 'clear_planets',
	SET_STARSHIPS: 'set_starships',
	ADD_STARSHIPS: 'add_starships',
	CLEAR_STARSHIPS: 'clear_starships',
	SET_VEHICLES: 'set_vehicles',
	ADD_VEHICLES: 'add_vehicles',
	CLEAR_VEHICLES: 'clear_vehicles',
	SET_SPECIES: 'set_species',
	ADD_SPECIES: 'add_species',
	CLEAR_SPECIES: 'clear_species',
	SET_GENDER: 'set_gender',
	CLEAR_GENDER: 'clear_gender',
	SET_SPECIE: 'set_specie',
	CLEAR_SPECIE: 'clear_specie',
	SET_FILM: 'set_film',
	CLEAR_FILM: 'clear_film',
	SET_TOTAL_PAGES: 'set_total_pages',
	CLEAR_TOTAL_PAGES: 'clear_total_pages',
	CLEAR_PAGE: 'clear_page',
	SET_NAME: 'set_name',
	CLEAR_NAME: 'clear_name',
	NEXT_PAGE: 'next_page',
	SET_OPEN: 'set_open',
	CLEAR_OPEN: 'clear_open',
	SET_CHARACTERS: 'set_characters',
	ADD_CHARACTERS: 'add_characters',
	CLEAR_CHARACTERS: 'clear_characters',
	SET_ALL: 'set_all',
	CLEAR_ALL: 'clear_all',
}

const reducer = (
	state: CharactersState,
	action: CharactersAction
): CharactersState => {
	switch (action.type) {
	case ACTIONS.SET_COUNT:
		return { ...state, count: action?.payload?.count ?? 0 }
	case ACTIONS.SET_PAGE:
		return { ...state, page: state.totalPages >= (action?.payload?.page || 0) ? action?.payload?.page ?? 0 : state.page}
	case ACTIONS.SET_TOTAL_PAGES:
		return { ...state, totalPages: action?.payload?.totalPages ?? 0 }
	case ACTIONS.ADD_CHARACTERS:
		return {
			...state,
			characters: [
				...state.characters,
				...(action?.payload?.characters ?? []),
			],
		}
	case ACTIONS.ADD_FILMS:
		return {
			...state,
			films: [
				...state.films,
				...(action?.payload?.films ?? []),
			],
		}
	case ACTIONS.ADD_PLANETS:
		return {
			...state,
			planets: [
				...state.planets,
				...(action?.payload?.planets ?? []),
			],
		}
	case ACTIONS.ADD_STARSHIPS:
		return {
			...state,
			starships: [
				...state.starships,
				...(action?.payload?.starships ?? []),
			],
		}
	case ACTIONS.ADD_VEHICLES:
		return {
			...state,
			vehicles: [
				...state.vehicles,
				...(action?.payload?.vehicles ?? []),
			],
		}
	case ACTIONS.ADD_SPECIES:
		return {
			...state,
			species: [
				...state.species,
				...(action?.payload?.species ?? []),
			],
		}
	case ACTIONS.CLEAR_CHARACTERS:
		return { ...state, characters: [] }
	case ACTIONS.CLEAR_FILMS:
		return { ...state, films: [] }
	case ACTIONS.CLEAR_PLANETS:
		return { ...state, planets: [] }
	case ACTIONS.CLEAR_STARSHIPS:
		return { ...state, starships: [] }
	case ACTIONS.CLEAR_VEHICLES:
		return { ...state, vehicles: [] }
	case ACTIONS.CLEAR_SPECIES:
		return { ...state, species: [] }
	case ACTIONS.CLEAR_GENDER:
		return { ...state, gender: '' }
	case ACTIONS.CLEAR_SPECIE:
		return { ...state, specie: '' }
	case ACTIONS.CLEAR_FILM:
		return { ...state, film: '' }
	case ACTIONS.CLEAR_NAME:
		return { ...state, name: '' }
	case ACTIONS.CLEAR_ALL:
		return initialState
	case ACTIONS.CLEAR_OPEN:
		return { ...state, open: '' }
	case ACTIONS.CLEAR_COUNT:
		return { ...state, count: 0 }
	case ACTIONS.CLEAR_TOTAL_PAGES:
		return { ...state, totalPages: 0 }
	case ACTIONS.CLEAR_PAGE:
		return { ...state, page: 1 }
	case ACTIONS.NEXT_PAGE:
		return { ...state, page: state.totalPages > state.page ? state.page + 1 : state.page }
	case ACTIONS.SET_ALL:
		return { ...state, ...action?.payload }
	case ACTIONS.SET_CHARACTERS:
		return { ...state, characters: action?.payload?.characters ?? [] }
	case ACTIONS.SET_SPECIES:
		return { ...state, species: action?.payload?.species ?? [] }
	case ACTIONS.SET_FILMS:
		return { ...state, films: action?.payload?.films ?? [] }
	case ACTIONS.SET_VEHICLES:
		return { ...state, vehicles: action?.payload?.vehicles ?? [] }
	case ACTIONS.SET_PLANETS:
		return { ...state, planets: action?.payload?.planets ?? [] }
	case ACTIONS.SET_STARSHIPS:
		return { ...state, starships: action?.payload?.starships ?? [] }
	case ACTIONS.SET_GENDER:
		return { ...state, gender: action?.payload?.gender ?? '' }
	case ACTIONS.SET_SPECIE:
		return { ...state, specie: action?.payload?.specie ?? '' }
	case ACTIONS.SET_FILM:
		return { ...state, film: action?.payload?.film ?? '' }
	case ACTIONS.SET_NAME:
		return { ...state, name: action?.payload?.name ?? '' }
	case ACTIONS.SET_OPEN:
		return { ...state, open: action?.payload?.open ?? '' }
	default:
		return state
	}
}

export const CharactersContext = createContext<{
  state: CharactersState
  dispatch: Dispatch<CharactersAction>
}>({ state: initialState, dispatch: () => null })

interface CharactersProviderProps {
  children: ReactElement
}

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<CharactersContext.Provider value={{ state, dispatch }}>
			{children}
		</CharactersContext.Provider>
	)
}
