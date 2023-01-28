import React, { createContext, useEffect, useState } from 'react'
import { People, IPeople, Species } from 'swapi-ts'

type valuesSchemaFav = {
	characters?: IPeople[] | []
	pagination?: number
	previous?: string | null
	next?: string | null
	setPagination?: any
	speciesNames?: string[]
	searchByName?: string
	setSearchByName?: any
	noDataFound?: string | null
	setNoDataFound?: any
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
	const [searchByName, setSearchByName] = useState('')
	const [noDataFound, setNoDataFound] = useState<string | null>(null)

	useEffect(() => {
		async function loadData() {
			if (searchByName === '') {
				const getPeople = await People.getPage(pagination)
				setCharacters(getPeople.results)
				setPrevious(getPeople.previous)
				setNext(getPeople.next)
			}
			if (searchByName.length >= 3) {
				const getSearchByName = await People.findBySearch([searchByName])
				if (getSearchByName.resources.length === 0) {
					setCharacters([])
					setNoDataFound('no data found with this search :(')
				} else {
					const dadosTratados = getSearchByName.resources.map(
						(item) => item.value
					)
					setCharacters(dadosTratados)
				}
			}
		}

		loadData()
	}, [pagination, searchByName])

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
		searchByName,
		setSearchByName,
		noDataFound,
		setNoDataFound,
	}

	return (
		<SWContext.Provider value={valoresParaPassar}>
			{children}
		</SWContext.Provider>
	)
}
