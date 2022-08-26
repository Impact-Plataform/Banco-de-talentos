import { api } from './api'

export const swapi = async (page = 1, search = '', type = 'people') => {
	const { data } = await api.get(`/${type}`, { params: { page, search } })
	return data
}
