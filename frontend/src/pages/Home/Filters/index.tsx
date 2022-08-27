import { genders } from '../../../assets/data/genders'
import { useCharacters } from '../../../hooks/useCharacters'

export const Filters = () => {
	const { state, dispatch, setGenderAction } = useCharacters()

	return (
		<div>
			<select
				value={state.gender}
				onChange={(e) => dispatch(setGenderAction({ gender: e.target.value }))}
			>
				{genders.map((gender) => (
					<option key={gender.value} value={gender.value}>
						{gender.label}
					</option>
				))}
			</select>
		</div>
	)
}
