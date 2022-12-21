import { createContext, Dispatch, ReactElement, useReducer } from 'react'
import { CharactersAction, CharactersState } from '../@types/characters'

export const initialState: CharactersState = {
	gender: '',
	specie: '',
	film: '',
	count: 0,
	name: '',
	prevName: '',
	page: 1,
	prevPage: 1,
	totalPages: 9999,
	open: '',
	init: true,
	characters: [],
	films: [],
	species: [],
	planets: [],
	starships: [],
	vehicles: [],
}

export const ACTIONS = {
	SET_PREV_PAGE: 'set_prev_page',
	SET_INIT: 'set_init',
	SET_PREV_NAME: 'set_prev_name',
	SET_FILMS: 'set_films',
	SET_PLANETS: 'set_planets',
	SET_STARSHIPS: 'set_starships',
	SET_VEHICLES: 'set_vehicles',
	SET_SPECIES: 'set_species',
	SET_GENDER: 'set_gender',
	SET_SPECIE: 'set_specie',
	SET_FILM: 'set_film',
	CLEAR_PAGE: 'clear_page',
	SET_NAME: 'set_name',
	NEXT_PAGE: 'next_page',
	SET_OPEN: 'set_open',
	CLEAR_OPEN: 'clear_open',
	ADD_CHARACTERS: 'add_characters',
	SET_ALL: 'set_all',
}

const reducer = (
	state: CharactersState,
	action: CharactersAction
): CharactersState => {
	switch (action.type) {
	case ACTIONS.SET_PREV_PAGE:
		return { ...state, prevPage: action?.payload?.prevPage ?? 0 }
	case ACTIONS.ADD_CHARACTERS:
		return {
			...state,
			characters: [
				...state.characters,
				...(action?.payload?.characters ?? []),
			],
		}
	case ACTIONS.CLEAR_OPEN:
		return { ...state, open: '' }
	case ACTIONS.SET_INIT:
		return { ...state, init: action?.payload?.init ?? true }
	case ACTIONS.CLEAR_PAGE:
		return { ...state, prevPage: 1, page: 1 }
	case ACTIONS.NEXT_PAGE:
		return { ...state, prevPage: state.page, page: state.totalPages > state.page ? state.page + 1 : state.page }
	case ACTIONS.SET_ALL:
		return { ...state, ...action?.payload }
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
		return { ...state, prevName: state.name, name: action?.payload?.name ?? '' }
	case ACTIONS.SET_PREV_NAME:
		return { ...state, prevName: action?.payload?.prevName ?? '' }
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
