import { CharacterT } from '../@types/characters'

export const filterCharacterEntries = (selected: CharacterT | undefined, showInfo: string[]) => Object.entries(selected || {})
	.filter((e) => showInfo.includes(e[0]))
