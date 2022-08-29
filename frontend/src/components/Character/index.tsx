import React from 'react'
import { CharacterT } from '../../@types/characters'
import { useCharacters } from '../../hooks/useCharacters'
import { Box, Image, Text } from './styles'

interface CharacterProps {
	data: CharacterT
	image: string
}

export const Character = ({ data, image }: CharacterProps) => {
	const { name } = data
	const { dispatch, setOpenAction } = useCharacters()

	const handleClick = () => dispatch(setOpenAction({ open: name }))

	return (
		<Box onClick={handleClick}>
			<Image src={image} alt={name} />
			<Text>{name}</Text>
		</Box>
	)
}
