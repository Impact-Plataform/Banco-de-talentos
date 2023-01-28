import SelectFilter from '../../SelectFilter'
import { useEffect, useState } from 'react'
import { Films } from 'swapi-ts'

export function FilmsFilter() {
	const [filmsList, setFilmsList] = useState<string[]>([])

	useEffect(() => {
		async function loadData() {
			const getFilms = (await Films.find()).resources
			const dadosTratados = getFilms.map((item) => item.value.title)
			setFilmsList(dadosTratados)
		}

		loadData()
	}, [])

	return <SelectFilter name="filmsFilter" label="films" options={filmsList} />
}
