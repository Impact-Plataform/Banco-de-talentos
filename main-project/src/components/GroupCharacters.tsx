import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { SWContext } from '../contexts/SWContext'
export function GroupCharacters() {
	const { characters, noDataFound } = useContext(SWContext)

	return (
		<div>
			{characters?.length === 0 && <p>{noDataFound}</p>}
			{characters?.map((item) => (
				<p key={nanoid()}>{item.name}</p>
			))}
		</div>
	)
}
