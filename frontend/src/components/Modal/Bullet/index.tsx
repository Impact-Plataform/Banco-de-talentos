import { Key, Text } from './styles'

interface BulletProps {
	info: [string, string]
}

export const Bullet = ({ info }: BulletProps) => {
	return (
		<Text><Key>{info[0].split('_').join(' ')}</Key>: {info[1]}</Text>
	)
}
