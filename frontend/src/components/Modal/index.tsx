import { Link } from 'react-router-dom'
import { CharacterT } from '../../@types/characters'
import { useCharacters } from '../../hooks/useCharacters'
import { Bullet } from './Bullet'
import { Background, Box, CloseBtn, Content, Image, Title, AllInfo } from './styles'

interface ModalProps {
  data?: CharacterT
  image: string
}

export const Modal = ({ data, image }: ModalProps) => {
	const { dispatch, clearOpenAction } = useCharacters()

	const closeModal = () => dispatch(clearOpenAction())

	const showInfo = [
		'mass',
		'height',
		'gender',
		'eye_color',
	]

	const info = Object.entries(data || showInfo)
		.filter((e) => showInfo.includes(e[0]))

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
								<Link to={`/characters/${data.name}`}><AllInfo>See More &#10150;</AllInfo></Link>
							</ul>
						</Content>
					</Box>
				</Background>
			)}
		</>
	)
}
