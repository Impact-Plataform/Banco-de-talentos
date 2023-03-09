import React, { createContext, useEffect, useState } from 'react'
import {
	People,
	IPeople,
	Species,
	Films,
	Planets,
	IPlanet,
	Starships,
} from 'swapi-ts'

export type ContentSchema = {
	name: string
	url: string
}

type valuesSchema = {
	characters: IPeople[] | []
	pagination?: number
	previous?: string | null
	next?: string | null
	setPagination?: any
	searchByName?: string
	setSearchByName?: any
	noDataFound?: string | null
	setNoDataFound?: any
	filterType?:
		| 'genderFilter'
		| 'speciesFilter'
		| 'filmsFilter'
		| 'searchByName'
		| 'all'
	setFilterType?: any
	filterValue?: string
	setFilterValue?: any
	species?: ContentSchema[]
	films?: ContentSchema[]
	planets: IPlanet[] | []
	starships: ContentSchema[] | []
}

type ProviderProps = {
	children: React.ReactNode
}

export const SWContext = createContext<valuesSchema>({
	planets: [],
	characters: [],
	starships: [],
})

export const SWContextProvider = ({ children }: ProviderProps) => {
	const [characters, setCharacters] = useState<IPeople[] | []>([])
	const [pagination, setPagination] = useState(1)
	const [next, setNext] = useState<string | null>('')
	const [previous, setPrevious] = useState<string | null>('')
	const [species, setSpecies] = useState<ContentSchema[]>([])
	const [films, setFilms] = useState<ContentSchema[]>([])
	const [starships, setStarships] = useState<ContentSchema[]>([])
	const [planets, setPlanets] = useState<IPlanet[] | []>([])
	const [searchByName, setSearchByName] = useState('')
	const [noDataFound, setNoDataFound] = useState<string | null>(null)
	const [filterType, setFilterType] = useState<
		'all' | 'genderFilter' | 'speciesFilter' | 'filmsFilter' | 'searchByName'
	>('all')
	const [filterValue, setFilterValue] = useState<string>('all')

	useEffect(() => {
		async function loadPlanets() {
			const getPlanets = (await Planets.find()).resources
			const spreadPlanetsData = getPlanets.map((planet) => planet.value)
			setPlanets(spreadPlanetsData)
		}
		loadPlanets()
	}, [])

	useEffect(() => {
		async function loadData() {
			if (filterValue !== 'all') {
				const getAllPeople = await People.find()

				if (filterType === 'genderFilter') {
					const filtradosPorGenero = getAllPeople.resources
						.filter(({ value }) => value.gender === filterValue)
						.map((item) => item.value)
					setCharacters(filtradosPorGenero)
				}
				if (filterType === 'speciesFilter') {
					const filtradosPorEspecie = getAllPeople.resources
						.filter((item) => item.value.species[0] === filterValue)
						.map((item) => item.value)
					setCharacters(filtradosPorEspecie)
				}
				if (filterType === 'filmsFilter') {
					const filtradosPorFilme = getAllPeople.resources
						.filter((item) => {
							for (let i = 0; i < item.value.films.length; i++) {
								if (item.value.films[i] === filterValue) return item.value
							}
						})
						.map((item) => item.value)

					setCharacters(filtradosPorFilme)
				}
			}

			if (searchByName === '' && filterValue === 'all') {
				const getPeople = await People.getPage(pagination)
				setCharacters(getPeople.results)
				setPrevious(getPeople.previous)
				setNext(getPeople.next)
			}
			if (searchByName.length >= 3) {
				setFilterType('searchByName')
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
	}, [pagination, searchByName, filterValue, filterType])

	useEffect(() => {
		async function loadSpecies() {
			const getSpecies = (await Species.find()).resources
			const dadosTratados = getSpecies.map(({ value }) => {
				return { name: value.name, url: value.url }
			})
			setSpecies(dadosTratados)
		}
		loadSpecies()
	}, [])

	useEffect(() => {
		async function loadFilmsList() {
			const getFilms = (await Films.find()).resources
			const dadosTratados = getFilms.map(({ value }) => {
				return { name: value.title, url: value.url }
			})
			setFilms(dadosTratados)
		}
		loadFilmsList()
	}, [])

	useEffect(() => {
		async function loadStarships() {
			const getStarships = (await Starships.find()).resources
			const dadosTratados = getStarships.map(({ value }) => {
				return { name: value.name, url: value.url }
			})
			setStarships(dadosTratados)
		}
		loadStarships()
	}, [])

	const valoresParaPassar = {
		characters,
		pagination,
		next,
		previous,
		setPagination,
		species,
		searchByName,
		setSearchByName,
		noDataFound,
		setNoDataFound,
		filterType,
		setFilterType,
		filterValue,
		setFilterValue,
		films,
		planets,
		starships,
	}

	return (
		<SWContext.Provider value={valoresParaPassar}>
			{children}
		</SWContext.Provider>
	)
}
