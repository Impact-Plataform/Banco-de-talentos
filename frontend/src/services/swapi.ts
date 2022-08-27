import { CharacterT } from '../@types/characters'
import { api } from './api'

interface SwapiReturn {
	count: number,
	results: CharacterT[]
}

export const swapi = async (page = 1, search = '', type = 'people'): Promise<SwapiReturn> => {
	const { data } = await api.get(`/${type}`, { params: { page, search } })
	return data
}
