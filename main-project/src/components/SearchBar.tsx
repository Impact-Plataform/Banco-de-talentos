import { useContext } from 'react'
import { SWContext } from '../contexts/SWContext'

export function SearchBar() {
	const { setSearchByName } = useContext(SWContext)
	return (
		<input
			type="text"
			className="border border-white rounded-md bg-transparent px-[10px] py-[6px] placeholder:text-white"
			placeholder="search by name..."
			onChange={(event) => {
				setSearchByName(event.target.value)
			}}
		/>
	)
}
