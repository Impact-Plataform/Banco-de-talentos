import { useContext } from 'react'
import { CharactersState } from '../@types/characters'
import { ACTIONS, CharactersContext } from '../contexts/charactersContext'

export const useCharacters = () => {
	const { state, dispatch } = useContext(CharactersContext)

	const setAllAction = (payload: Partial<CharactersState>) => ({ type: ACTIONS.SET_ALL, payload })
	const setNameAction = (payload: Partial<CharactersState>) => ({ type: ACTIONS.SET_NAME, payload })
	const setGenderAction = (payload: Partial<CharactersState>) => ({ type: ACTIONS.SET_GENDER, payload })
	const addCharactersAction = (payload: Partial<CharactersState>) => ({ type: ACTIONS.ADD_CHARACTERS, payload })
	const clearAllAction = () => ({ type: ACTIONS.CLEAR_ALL })
	const nextPageAction = () => ({ type: ACTIONS.NEXT_PAGE })

	return {
		state,
		dispatch,
		setAllAction,
		nextPageAction,
		addCharactersAction,
		clearAllAction,
		setNameAction,
		setGenderAction
	}
}
