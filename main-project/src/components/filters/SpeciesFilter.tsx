import { useContext } from 'react'
import { SWContext } from '../../contexts/SWContext'
import SelectFilter from '../SelectFilter'

export function SpeciesFilter() {
	const { species } = useContext(SWContext)
	return (
		<SelectFilter name="speciesFilter" label="species" content={species!} />
	)
}
