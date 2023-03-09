import { useContext } from 'react'
import { SWContext } from '../contexts/SWContext'

export function SearchBar() {
	const { setSearchByName, setFilterType, setFilterValue } =
		useContext(SWContext)
	return (
		<input
			type="text"
			className="border border-white rounded-md bg-transparent px-[10px] py-[6px] placeholder:text-white"
			placeholder="search by name..."
			onChange={(event) => {
				setSearchByName(event.target.value)

				setFilterValue('all')
				if (event.target.value === '') {
					setFilterType('all')
					setFilterValue('all')
				}
			}}
		/>
	)
}
