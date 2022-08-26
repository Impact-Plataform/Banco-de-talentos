import { api } from './api'

export const swapi = async (page = 1, name = '', type = 'people') => {
	const { data } = await api.get(`/${type}`, { params: { page, name } })
	return data
}
