interface BulletProps {
	info: [string, string]
}

export const Bullet = ({ info }: BulletProps) => {
	return (
		<p><strong>{info[0]}</strong>: {info[1]}</p>
	)
}
