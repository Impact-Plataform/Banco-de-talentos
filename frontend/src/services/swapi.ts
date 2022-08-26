import { api } from './api'

export const swapi = async (page = 1, type = 'people') => {
	const { data } = await api.get(`/${type}`, { params: { page } })
	return data
}
