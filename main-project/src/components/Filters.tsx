import { FilmsFilter } from './filters/FilmsFilter'
import { GenderFilter } from './filters/GenderFilter'
import { SpeciesFilter } from './filters/SpeciesFilter'

export function Filters() {
	return (
		<div className="flex">
			<span className="font-bold text-[11px]">Filter by:</span>

			<div className="mx-1 flex justify-evenly w-full gap-2">
				<GenderFilter />
				<SpeciesFilter />
				<FilmsFilter />
			</div>
		</div>
	)
}
