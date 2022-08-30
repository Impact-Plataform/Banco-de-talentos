import { useNavigate } from 'react-router-dom'
import { CharacterT } from '../../@types/characters'
import { useCharacters } from '../../hooks/useCharacters'
import { filterCharacterEntries } from '../../utils/filterCharacterEntries'
import { Bullet } from '../Bullet'
import { Background, Box, CloseBtn, Content, Image, Title, AllInfo } from './styles'

interface ModalProps {
  data?: CharacterT
  image: string
}

export const Modal = ({ data, image }: ModalProps) => {
	const { dispatch, clearOpenAction, state, setPrevPageAction, setPrevNameAction } = useCharacters()
	const navigate = useNavigate()

	const closeModal = () => dispatch(clearOpenAction())

	const showInfo = [
		'mass',
		'height',
		'gender',
		'eye_color',
	]

	const info = filterCharacterEntries(data, showInfo)

	const handleSeeMore = () => {
		closeModal()
		dispatch(setPrevPageAction({ prevPage: state.page }))
		dispatch(setPrevNameAction({ prevName: state.name }))
		navigate(`/characters/${data?.name}`)
	}

	return (
		<>
			{data && (
				<Background onClick={closeModal}>
					<Box onClick={(e) => e.stopPropagation()}>
						<CloseBtn onClick={closeModal}>&times;</CloseBtn>
						<Title>{data.name}</Title>
						<Content>
							<Image src={image} />
							<ul>
								{info.map((i) => (
									<Bullet key={i[0]} info={i as [string, string]} />
								))}
								<AllInfo onClick={handleSeeMore}>See More &#10150;</AllInfo>
							</ul>
						</Content>
					</Box>
				</Background>
			)}
		</>
	)
}
