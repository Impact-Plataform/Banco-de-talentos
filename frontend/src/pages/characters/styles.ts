import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-flow: column nowrap;

	margin: 0 auto;
	max-width: 1000px;
`

export const Divider = styled.div`
	width: 100%;
	height: 1px;

	background-color: #ccc;
	margin: 20px auto;
`

export const Content = styled.div`
	display: flex;
	flex-flow: column nowrap;

	@media (min-width: 600px) {
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
	margin: 0 auto;
	align-self: center;
	max-width: 400px;

	aspect-ratio: 1;
	max-height: 400px;

	object-fit: cover;
	object-position: top;

	border-radius: 15px;

	margin: 0 0 15px 0;

	@media (min-width: 600px) {
		width: 50%;
		max-width: 500px;
		max-height: 500px;
		align-self: flex-start;
		margin-right: 15px;
	}
`
export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	width: fit-content;
	height: fit-content;

	@media (min-width: 600px) {
		grid-template-columns: 1fr
	}
`

export const MoreInfo = styled.div`
	display: flex;
	flex-flow: column nowrap;
`
export const TextContainer = styled.div`
	max-width: 400px;
	margin: 0 auto;

	@media (min-width: 600px) {
		max-width: initial;
	}
`
