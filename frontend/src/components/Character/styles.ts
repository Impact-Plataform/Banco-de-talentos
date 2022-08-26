import styled from 'styled-components'

export const Box = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 200px;

	padding: 0.8rem;
	border-radius: 1rem;
	box-shadow: 0 0 10px #00000099;

	background-color: #666;
	color: white;
	text-align: center;
`

export const Image = styled.img`
	width: 100px;
	aspect-ratio: 4 / 5;

	border-radius: 0.5rem;
	object-fit: cover;
	object-position: top;

	margin: 0 0 10px 0;
`
