import { useContext } from 'react'
import { CharactersContext } from '../contexts/charactersContext'

export const useCharacters = () => {
	const { state, dispatch } = useContext(CharactersContext)
	return { state, dispatch }
}
