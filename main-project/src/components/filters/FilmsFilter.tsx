import SelectFilter from '../../SelectFilter'
import { api } from '../../api/api'
import { useEffect, useState } from 'react'
import { Films, IFilm } from 'swapi-ts'

export function FilmsFilter() {
	const [filmsList, setFilmsList] = useState<string[]>([])

	useEffect(() => {
		async function loadData() {
			// const apiResponse: IFilm[] = await api
			// 	.get('/films')
			// 	.then(({ data }) => data.results)
			// setFilmsList(() => apiResponse.map((item) => item.title))

			const getFilms = (await Films.find()).resources
			const dadosTratados = getFilms.map((item) => item.value.title)
			setFilmsList(dadosTratados)
		}

		loadData()
	}, [])

	return <SelectFilter name="filmsFilter" label="films" options={filmsList} />
}
