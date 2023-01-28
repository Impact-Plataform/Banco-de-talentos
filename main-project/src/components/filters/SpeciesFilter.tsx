import SelectFilter from '../../SelectFilter'
import { api } from '../../api/api'
import { useEffect, useState } from 'react'
import { Species } from 'swapi-ts'

export function SpeciesFilter() {
	const [species, setSpecies] = useState<string[]>([])

	useEffect(() => {
		async function loadData() {
			// const aux = []
			// let numPages = 4
			// //adicionar função que transforma o número de counts em número de giros
			// for (let i = 1; i <= numPages; i++) {
			// 	const apiResponse = await api.get(`/species/?page=${i}`)
			// 	//usar o setSpecies corretamente atribuindo por meio de uma função
			// 	//e incluir a tipagem
			// 	aux.push(...apiResponse.data.results)

			// 	// 		setCharacters(prevState => {
			// 	//     return { ...prevState, apiResponse.data.results}
			// 	// });
			// }
			// const dadosTratados = aux.map((item) => item.name)
			// setSpecies(dadosTratados)
			const getSpecies = (await Species.find()).resources
			const dadosTratados = getSpecies.map((item) => item.value.name)
			setSpecies(dadosTratados)
		}

		loadData()
	}, [])

	return <SelectFilter name="speciesFilter" label="species" options={species} />
}
