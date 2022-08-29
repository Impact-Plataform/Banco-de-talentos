import styled from 'styled-components'

export const Container = styled.div`
	margin: 20px auto;

	> * {
		margin: 5px;
		padding: 5px;
		width: calc(50% - 10px);
		background-color: #444;

		border: none;
		border-bottom: 1px solid #666;
		outline: none;
		color: #ccc;
	}

	> input::placeholder {
		color: #ccc;
	}
`