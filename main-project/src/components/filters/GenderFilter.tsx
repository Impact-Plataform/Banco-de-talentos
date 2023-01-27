import SelectFilter from '../../SelectFilter'

export function GenderFilter() {
	return (
		<SelectFilter
			name="genderFilter"
			label="gender"
			options={['Male', 'Female', 'unknown', 'n/a']}
		/>
	)
}
