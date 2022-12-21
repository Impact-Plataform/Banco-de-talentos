import { Key, Text } from './styles'

interface BulletProps {
	info: [string, string]
	color?: string
}

export const Bullet = ({ info, color }: BulletProps) => {
	return (
		<Text color={color}><Key>{info[0].split('_').join(' ')}</Key>: {info[1]}</Text>
	)
}
