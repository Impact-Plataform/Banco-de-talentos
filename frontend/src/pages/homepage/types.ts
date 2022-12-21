import { CharactersState } from '../../@types/characters'

export interface Option {
	title?: string,
	name?: string,
	url: string
}

export interface SelectProps {
	label: string
	type: string
	value: string
	data: Option[]
	onChange: (value: Partial<CharactersState>) => void
}
