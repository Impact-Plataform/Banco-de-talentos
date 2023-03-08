type CharacterInfoProps = {
	dataLabel: string
	data: string
}

export function CharacterInfo({ data, dataLabel }: CharacterInfoProps) {
	return (
		<li className="text-sm">
			<span className="font-bold">{dataLabel.replace('_', ' ')}:</span>
			<span> {data}</span>
		</li>
	)
}
