import styled from 'styled-components'

export const Text = styled.p<{color?: string}>`
	color: ${({color}) => color || '#666'};
	font-weight: 600;
	font-size: 1.1rem;
	margin-bottom: 0.5rem;

	@media (min-width: 360px) {
		font-size: 1.25rem;
	}
`
export const Key = styled.strong`
	font-weight: 700;

	&::first-letter {
		text-transform: uppercase;
	}
`
