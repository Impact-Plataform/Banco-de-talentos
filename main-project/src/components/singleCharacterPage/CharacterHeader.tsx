type CharacterHeaderProps = {
	characterName: string
	homeworld: string
}

export default function CharacterHeader({
	characterName,
	homeworld,
}: CharacterHeaderProps) {
	return (
		<div>
			<h1 className="text-center md:text-left">{characterName}</h1>
			<p className="font-bold">from {homeworld}</p>
		</div>
	)
}
