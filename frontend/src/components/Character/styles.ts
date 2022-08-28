import styled from 'styled-components'

export const Box = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	width: 10rem;

	padding: 1.25rem;
	border-radius: 1rem;
	box-shadow: 0 0 1rem #00000099;

	background-color: #666;
	color: white;
	text-align: center;

	cursor: pointer;
`

export const Image = styled.img`
	width: 7.5rem;
	aspect-ratio: 4 / 5;

	border-radius: 0.5rem;
	object-fit: cover;
	object-position: top;

	margin: 0 0 0.75rem 0;
`
