import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-flow: column nowrap;

	margin: 0 auto;
	max-width: 1000px;
`

export const Content = styled.div`
	display: flex;
	flex-flow: column nowrap;

	@media (min-width: 450px) {
		flex-flow: row nowrap;
	}
`

export const Title = styled.h2`
	text-align: center;
	color: #ccc;
	font-weight: 600;
	font-size: 1.75rem;

	margin-bottom: 20px;

	span {
		position: absolute;
		left: 0px;

		display: inline-block;
		font-weight: 700;

		transform: rotate(180deg);

		cursor: pointer;
	}
`
export const Image = styled.img`
	width: 100%;
	max-width: 500px;

	aspect-ratio: 1;

	object-fit: cover;
	object-position: top;

	border-radius: 15px;

	margin: 0 0 15px 0;

	@media (min-width: 450px) {
		margin-right: 15px;
	}
`
export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	width: fit-content;
	height: fit-content;

	@media (min-width: 450px) {
		grid-template-columns: 1fr
	}
`