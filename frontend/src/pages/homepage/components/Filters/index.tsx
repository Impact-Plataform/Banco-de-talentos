import { genders } from '../../../../assets/data/genders'
import { useCharacters } from '../../../../hooks/useCharacters'
import { SelectProps } from '../../types'
import { Select } from '../Select'
import { Container } from './styles'

export const Filters = () => {
	const { state, dispatch, setGenderAction, setFilmAction, setSpecieAction, setNameAction } =
    useCharacters()

	const selects: SelectProps[] = [
		{
			data: genders,
			label: 'Gender',
			onChange: (value) => dispatch(setGenderAction(value)),
			value: state.gender,
			type: 'gender',
		},
		{
			data: state.films,
			label: 'Film',
			onChange: (value) => dispatch(setFilmAction(value)),
			value: state.film,
			type: 'film',
		},
		{
			data: state.species,
			label: 'Species',
			onChange: (value) => dispatch(setSpecieAction(value)),
			value: state.specie,
			type: 'specie',
		},
	]

	return (
		<Container>
			<input
				type='search'
				placeholder='Search by name'
				value={state.name}
				onChange={(e) => dispatch(setNameAction({ name: e.target.value }))}
			/>
			{selects.map((s) => (
				<Select key={s.type} {...s} />
			))}
		</Container>
	)
}
