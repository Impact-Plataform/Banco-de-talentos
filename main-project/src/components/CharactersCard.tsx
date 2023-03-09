import { Link } from 'react-router-dom'
import { IPeople } from 'swapi-ts'
import { motion } from 'framer-motion'

type characterType = {
	character: IPeople
	birthplace: string
	info: { id: string; name: string }
}

export function CharactersCard({ character, birthplace, info }: characterType) {
	const modifyGender = (gender: string) => {
		if (gender === 'n/a' || gender === 'unknown' || gender === 'none') {
			return 'unknown gender'
		}
		return gender
	}

	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className="bg-black border border-white hover:border-primary rounded-md py-2 px-3 flex flex-col items-center gap-3 w-[80%] md:w-[25%]"
		>
			{character && (
				<>
					<Link to={`/character/${info.name}`}>
						<img
							src={require(`../assets/characters-images/${info.id}.jpg`)}
							alt={`${info.name}'s on schene`}
						/>
					</Link>

					<div className="text-center">
						<h3 className="text-primary">{character.name}</h3>
						<span className="text-sm">
							{modifyGender(character.gender)}, from {birthplace}
						</span>
					</div>

					<Link to={`/character/${info.name}`}>
						<button className="font-bold hover:text-primary">
							+ click for more
						</button>
					</Link>
				</>
			)}
		</motion.div>
	)
}
