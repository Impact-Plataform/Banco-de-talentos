import SelectFilter from '../../SelectFilter'
import { useContext } from 'react'
import { SWContext } from '../../contexts/SWContext'

export function FilmsFilter() {
	const { films } = useContext(SWContext)

	return <SelectFilter name="filmsFilter" label="films" content={films!} />
}
