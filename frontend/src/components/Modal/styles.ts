import styled from 'styled-components'

export const Background = styled.div`
	position: fixed;
	inset: 0;
	z-index: 10;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 100vw;
	height: 100vh;

	background-color: #00000099;
`

export const Box = styled.div`
	display: flex;
	flex-flow: column nowrap;

	padding: 15px;

	width: 90vw;
	max-width: 450px;
	height: fit-content;
	min-height: 40vh;
	max-height: 70vh;

	border-radius: 15px;

	background-color: #ccc;
`

export const Content = styled.div`
	display: flex;
`

export const CloseBtn = styled.button`

`

export const Title = styled.h2`

`

export const Image = styled.img`
	width: 30%;
`
