import { CharacterT } from '../@types/characters'

export const filterCharacters = (characters: CharacterT[], gender: string, film: string, species: string): CharacterT[] => {
	if (gender !== '') characters = characters.filter(character => character.gender === gender)

	return characters
}
