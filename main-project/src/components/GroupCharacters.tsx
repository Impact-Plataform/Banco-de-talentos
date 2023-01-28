import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { SWContext } from '../contexts/SWContext'
export function GroupCharacters() {
	const { characters } = useContext(SWContext)

	return (
		<div>
			{characters?.map((item) => (
				<p key={nanoid()}>{item.name}</p>
			))}
		</div>
	)
}
