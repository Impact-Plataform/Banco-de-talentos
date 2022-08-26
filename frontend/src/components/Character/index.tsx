import React from 'react'
import { CharacterT } from '../../@types/characters'
import { Box, Image } from './styles'

interface CharacterProps {
	data: CharacterT
	image: string
}

export const Character = ({ data, image }: CharacterProps) => {
	const { name } = data

	return (
		<Box>
			<Image src={image} alt={name} />
			<p>{name}</p>
		</Box>
	)
}
