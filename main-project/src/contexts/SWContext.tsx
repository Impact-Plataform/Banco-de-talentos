import React, { createContext, useEffect, useState } from 'react'
import { People, IPeople, Species } from 'swapi-ts'

type valuesSchemaFav = {
	characters?: IPeople[] | []
	pagination?: number
	previous?: string | null
	next?: string | null
	setPagination?: any
	speciesNames?: string[]
}

type ProviderProps = {
	children: React.ReactNode
}

export const SWContext = createContext<valuesSchemaFav>({})

export const SWContextProvider = ({ children }: ProviderProps) => {
	const [characters, setCharacters] = useState<IPeople[] | []>([])
	const [pagination, setPagination] = useState(1)
	const [next, setNext] = useState<string | null>('')
	const [previous, setPrevious] = useState<string | null>('')
	const [speciesNames, setSpeciesNames] = useState<string[]>([])

	useEffect(() => {
		async function loadData() {
			const getPeople = await People.getPage(pagination)
			setCharacters(getPeople.results)
			setPrevious(getPeople.previous)
			setNext(getPeople.next)
		}

		loadData()
	}, [pagination])

	useEffect(() => {
		async function loadSpecies() {
			const getSpecies = (await Species.find()).resources
			const dadosTratados = getSpecies.map(({ value }) => value.name)
			setSpeciesNames(dadosTratados)
		}
		loadSpecies()
	}, [])

	const valoresParaPassar = {
		characters,
		pagination,
		next,
		previous,
		setPagination,
		speciesNames,
	}

	return (
		<SWContext.Provider value={valoresParaPassar}>
			{children}
		</SWContext.Provider>
	)
}
