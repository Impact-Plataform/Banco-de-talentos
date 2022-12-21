import styled from 'styled-components'

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;

	width: fit-content;
	max-width: 1000px;

	@media (min-width: 300px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 450px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 700px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

export const View = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`
