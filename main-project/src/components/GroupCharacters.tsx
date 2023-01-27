import { useEffect, useState } from 'react'
import { api } from '../api/api'
import { nanoid } from 'nanoid'
import { PaginationButton } from './PaginationButton'

type SingleCharacter = {
	name: string
	birth_year: string
	gender: string
	eye_color: string
}

type PaginationProps = {
	next: string | null
	previous: string | null
}

export function GroupCharacters() {
	const [data, setData] = useState<SingleCharacter[]>([])
	const [pagination, setPagination] = useState(1)
	const [previous, setPrevious] = useState<PaginationProps>()
	const [next, setNext] = useState<PaginationProps>()

	useEffect(() => {
		api
			.get(`/people/?page=${pagination.toString()}`)
			.then((response) => {
				setPrevious(response.data.previous)
				setNext(response.data.next)
				setData(response.data.results)
			})
			.catch((err) => {
				console.error('deu ruim: ', err)
			})
	}, [pagination])

	return (
		<div>
			<div className="flex justify-evenly">
				<div className="flex justify-evenly w-full">
					<PaginationButton
						title="anterior"
						callback={() => {
							if (previous !== null) {
								setPagination(pagination - 1)
							}
						}}
					/>

					<PaginationButton
						title="próxima"
						callback={() => {
							if (next !== null) {
								setPagination(pagination + 1)
							}
						}}
					/>
				</div>
			</div>
			{data.map((character) => (
				<div key={nanoid()} className="border border-white rounded">
					<p>Name: {character.name}</p>
					<p>Birth Year: {character.birth_year}</p>
					<p>Gender: {character.gender}</p>
					<p>Eye color: {character.eye_color}</p>
				</div>
			))}
		</div>
	)
}
