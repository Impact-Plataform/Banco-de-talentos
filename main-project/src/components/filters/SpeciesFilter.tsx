import SelectFilter from '../../SelectFilter'

export function SpeciesFilter() {
	return (
		<SelectFilter
			name="speciesFilter"
			label="species"
			options={['especie', 'especie 2']}
		/>
	)
}
