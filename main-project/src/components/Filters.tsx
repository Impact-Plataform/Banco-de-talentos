import { GenderFilter } from './filters/GenderFilter'

export function Filters() {
	return (
		<div className="flex">
			<span className="font-bold text-xs">Filter by:</span>

			<div className="mx-2">
				<GenderFilter />
			</div>
		</div>
	)
}
