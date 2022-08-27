import { useCharacters } from './useCharacters'

export const useObserver = () => {
	const { dispatch, nextPageAction } = useCharacters()

	const options = {
		root: null,
		rootMargin: '20px',
		threshold: 1.0,
	}

	const observer = new IntersectionObserver((entities) => {
		const target = entities[0]

		if (target.isIntersecting) {
			dispatch(nextPageAction())
		}
	}, options)

	return observer
}
