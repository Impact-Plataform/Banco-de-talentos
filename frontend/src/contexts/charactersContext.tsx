import { createContext, Dispatch, ReactElement, useReducer } from 'react'
import { CharactersAction, CharactersState } from '../@types/characters'

export const initialState: CharactersState = {
	gender: '',
	species: '',
	film: '',
	count: 0,
	name: '',
	page: 1,
	totalPages: 99,
	open: '',
	characters: [],
	films: [],
	allSpecies: [],
}

export const ACTIONS = {
	SET_COUNT: 'set_count',
	CLEAR_COUNT: 'clear_count',
	SET_FILMS: 'set_films',
	CLEAR_FILMS: 'clear_films',
	SET_ALL_SPECIES: 'set_all_species',
	CLEAR_ALL_SPECIES: 'clear_all_species',
	SET_GENDER: 'set_gender',
	CLEAR_GENDER: 'clear_gender',
	SET_SPECIES: 'set_species',
	CLEAR_SPECIES: 'clear_species',
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
	case ACTIONS.CLEAR_CHARACTERS:
		return { ...state, characters: [] }
	case ACTIONS.CLEAR_GENDER:
		return { ...state, gender: '' }
	case ACTIONS.CLEAR_SPECIES:
		return { ...state, species: '' }
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
		return { ...state, page: state.page + 1 }
	case ACTIONS.SET_ALL:
		return { ...state, ...action?.payload }
	case ACTIONS.SET_CHARACTERS:
		return { ...state, characters: action?.payload?.characters ?? [] }
	case ACTIONS.SET_GENDER:
		return { ...state, gender: action?.payload?.gender ?? '' }
	case ACTIONS.SET_SPECIES:
		return { ...state, species: action?.payload?.species ?? '' }
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
