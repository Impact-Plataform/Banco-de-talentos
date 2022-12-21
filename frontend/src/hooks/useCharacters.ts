import { useContext } from 'react'
import { CharactersState } from '../@types/characters'
import { ACTIONS, CharactersContext } from '../contexts/charactersContext'

export const useCharacters = () => {
	const { state, dispatch } = useContext(CharactersContext)

	const genericPayloadAction = (type: string) => (payload: Partial<CharactersState>) => ({ type, payload })
	const genericRawAction = (type: string) => () => ({ type })

	const setPrevPageAction = genericPayloadAction(ACTIONS.SET_PREV_PAGE)
	const setInitAction = genericPayloadAction(ACTIONS.SET_INIT)
	const setPrevNameAction = genericPayloadAction(ACTIONS.SET_PREV_NAME)
	const setFilmsAction = genericPayloadAction(ACTIONS.SET_FILMS)
	const setPlanetsAction = genericPayloadAction(ACTIONS.SET_PLANETS)
	const setStarshipsAction = genericPayloadAction(ACTIONS.SET_STARSHIPS)
	const setVehiclesAction = genericPayloadAction(ACTIONS.SET_VEHICLES)
	const setSpeciesAction = genericPayloadAction(ACTIONS.SET_SPECIES)
	const setGenderAction = genericPayloadAction(ACTIONS.SET_GENDER)
	const setSpecieAction = genericPayloadAction(ACTIONS.SET_SPECIE)
	const setFilmAction = genericPayloadAction(ACTIONS.SET_FILM)
	const clearPageAction = genericRawAction(ACTIONS.CLEAR_PAGE)
	const setNameAction = genericPayloadAction(ACTIONS.SET_NAME)
	const nextPageAction = genericRawAction(ACTIONS.NEXT_PAGE)
	const setOpenAction = genericPayloadAction(ACTIONS.SET_OPEN)
	const clearOpenAction = genericRawAction(ACTIONS.CLEAR_OPEN)
	const addCharactersAction = genericPayloadAction(ACTIONS.ADD_CHARACTERS)
	const setAllAction = genericPayloadAction(ACTIONS.SET_ALL)

	return {
		state,
		dispatch,
		setAllAction,
		nextPageAction,
		addCharactersAction,
		setNameAction,
		setGenderAction,
		setFilmsAction,
		setFilmAction,
		setSpeciesAction,
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
