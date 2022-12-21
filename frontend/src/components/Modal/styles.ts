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
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;

	padding: 15px;

	width: 90vw;
	max-width: 450px;
	height: 50vh;

	border-radius: 15px;

	background-color: #ccc;
`

export const Content = styled.div`
	display: flex;
	align-items: flex-end;
`

export const CloseBtn = styled.button`
	position: absolute;
	right: 10px;
	top: 10px;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 20px;
	height: 20px;

	border: none;
	background-color: transparent;
	color: #444;

	font-size: 3rem;

	cursor: pointer;
`

export const Title = styled.h2`
	white-space: nowrap;
	max-width: 85%;
	overflow: hidden;
	font-size: 2rem;
	font-weight: 700;
	color: #444;
`

export const Image = styled.img`
	width: 50%;
	height: calc(calc(50vh - 45px) - 2rem);

	object-fit: cover;
	object-position: top;

	border-radius: 15px;

	margin-right: 15px;
`

export const AllInfo = styled.li`
	display: inline-block;
	height: fit-content;

	color: #444;
	font-weight: 700;
	font-size: 1.1rem;

	margin-top: 15px;

	cursor: pointer;

	@media (min-width: 360px) {
		font-size: 1.25rem;
	}
`
