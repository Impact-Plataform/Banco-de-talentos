import styled from 'styled-components'

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;

	width: fit-content;
`

export const View = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;

	margin: 2rem 0;
`
