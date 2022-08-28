import { CharacterT } from '../../@types/characters'
import { useCharacters } from '../../hooks/useCharacters'
import { Bullet } from './Bullet'
import { Background, Box, CloseBtn, Content, Image, Title } from './styles'

interface ModalProps {
  data?: CharacterT
  image: string
}

export const Modal = ({ data, image }: ModalProps) => {
	const { dispatch, clearOpenAction } = useCharacters()

	const closeModal = () => dispatch(clearOpenAction())

	const showInfo: { [key: string]: string } = {
		mass: 'Massa',
		height: 'Altura',
		gender: 'Gênero',
		eye_color: 'Cor dos olhos',
	}

	const info = Object.entries(data || showInfo)
		.filter((e) => Object.keys(showInfo).includes(e[0]))
		.map((item) => [showInfo[item[0]], item[1]])

	return (
		<>
			{data && (
				<Background>
					<Box>
						<CloseBtn onClick={closeModal} />
						<Title>{data.name}</Title>
						<Content>
							<Image src={image} />
							{info.map((i) => (
								<Bullet key={i[0]} info={i as [string, string]} />
							))}
						</Content>
					</Box>
				</Background>
			)}
		</>
	)
}
