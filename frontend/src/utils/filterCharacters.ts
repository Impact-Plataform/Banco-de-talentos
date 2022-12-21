import { CharacterT } from '../@types/characters'

export const filterCharacters = (characters: CharacterT[], gender: string, film: string, specie: string): CharacterT[] => {
	if (gender !== '') characters = characters.filter(character => character.gender === gender)
	if (film !== '') characters = characters.filter(character => character.films.includes(film))
	if (specie !== '') characters = characters.filter(character => character.species.includes(specie))

	return characters || []
}
