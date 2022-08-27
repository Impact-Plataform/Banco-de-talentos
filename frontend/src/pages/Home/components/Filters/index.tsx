import { genders } from '../../../../assets/data/genders'
import { useCharacters } from '../../../../hooks/useCharacters'
import { SelectProps } from '../../types'
import { Select } from '../Select'

export const Filters = () => {
	const { state, dispatch, setGenderAction, setFilmAction, setSpecieAction } =
    useCharacters()

	const selects: SelectProps[] = [
		{
			data: genders,
			label: 'Gênero',
			onChange: (value) => dispatch(setGenderAction(value)),
			value: state.gender,
			type: 'gender',
		},
		{
			data: state.films,
			label: 'Filme',
			onChange: (value) => dispatch(setFilmAction(value)),
			value: state.film,
			type: 'film',
		},
		{
			data: state.species,
			label: 'Espécie',
			onChange: (value) => dispatch(setSpecieAction(value)),
			value: state.specie,
			type: 'specie',
		},
	]

	return (
		<div>
			{selects.map((s) => (
				<Select key={s.type} {...s} />
			))}
		</div>
	)
}
