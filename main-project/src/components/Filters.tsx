import { FilmsFilter } from './filters/FilmsFilter'
import { GenderFilter } from './filters/GenderFilter'
import { SpeciesFilter } from './filters/SpeciesFilter'

export function Filters() {
	return (
		<div className="flex">
			<span className="font-bold text-xs">Filter by:</span>

			<div className="mx-2 flex justify-evenly w-full">
				<GenderFilter />
				<SpeciesFilter />
				<FilmsFilter />
			</div>
		</div>
	)
}
