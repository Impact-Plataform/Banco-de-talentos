import styled from 'styled-components'

export const Box = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;

	padding: 1.25rem;
	border-radius: 1rem;
	box-shadow: 0 0 1rem #00000099;

	background-color: #666;
	color: white;
	text-align: center;

	cursor: pointer;
`

export const Image = styled.img`
	width: 100%;
	aspect-ratio: 4 / 5;

	border-radius: 0.5rem;
	object-fit: cover;
	object-position: top;

	margin: 0 0 0.75rem 0;
`

export const Text = styled.p`
	font-weight: 600;
	font-size: 1.1rem;
`
