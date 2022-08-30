import { useContext } from 'react'
import { CharactersState } from '../@types/characters'
import { ACTIONS, CharactersContext } from '../contexts/charactersContext'

export const useCharacters = () => {
	const { state, dispatch } = useContext(CharactersContext)

	const genericPayloadAction = (type: string) => (payload: Partial<CharactersState>) => ({ type, payload })
	const genericRawAction = (type: string) => () => ({ type })

	const setAllAction = genericPayloadAction(ACTIONS.SET_ALL)
	const setPrevPageAction = genericPayloadAction(ACTIONS.SET_PREV_PAGE)
	const setNameAction = genericPayloadAction(ACTIONS.SET_NAME)
	const setPrevNameAction = genericPayloadAction(ACTIONS.SET_PREV_NAME)
	const setGenderAction = genericPayloadAction(ACTIONS.SET_GENDER)
	const setFilmAction = genericPayloadAction(ACTIONS.SET_FILM)
	const addCharactersAction = genericPayloadAction(ACTIONS.ADD_CHARACTERS)
	const setFilmsAction = genericPayloadAction(ACTIONS.SET_FILMS)
	const addFilmsAction = genericPayloadAction(ACTIONS.ADD_FILMS)
	const setSpecieAction = genericPayloadAction(ACTIONS.SET_SPECIE)
	const setSpeciesAction = genericPayloadAction(ACTIONS.SET_SPECIES)
	const setPlanetsAction = genericPayloadAction(ACTIONS.SET_PLANETS)
	const setStarshipsAction = genericPayloadAction(ACTIONS.SET_STARSHIPS)
	const setVehiclesAction = genericPayloadAction(ACTIONS.SET_VEHICLES)
	const addSpeciesAction = genericPayloadAction(ACTIONS.ADD_SPECIES)
	const setInitAction = genericPayloadAction(ACTIONS.SET_INIT)
	const setOpenAction = genericPayloadAction(ACTIONS.SET_OPEN)
	const clearAllAction = genericRawAction(ACTIONS.CLEAR_ALL)
	const clearPageAction = genericRawAction(ACTIONS.CLEAR_PAGE)
	const nextPageAction = genericRawAction(ACTIONS.NEXT_PAGE)
	const clearOpenAction = genericRawAction(ACTIONS.CLEAR_OPEN)

	return {
		state,
		dispatch,
		setAllAction,
		nextPageAction,
		addCharactersAction,
		clearAllAction,
		setNameAction,
		setGenderAction,
		setFilmsAction,
		addFilmsAction,
		setFilmAction,
		setSpeciesAction,
		addSpeciesAction,
		setSpecieAction,
		clearPageAction,
		setOpenAction,
		clearOpenAction,
		setPlanetsAction,
		setStarshipsAction,
		setVehiclesAction,
		setInitAction,
		setPrevPageAction,
		setPrevNameAction
	}
}
