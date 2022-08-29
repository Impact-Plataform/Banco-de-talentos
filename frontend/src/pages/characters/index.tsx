import { useParams } from 'react-router-dom'

export const Characters = () => {
	const { name } = useParams()

	return (
		<div>Characters {name}</div>
	)
}
