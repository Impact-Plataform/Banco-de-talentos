import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { SWContext, FiltersContentSchema } from './contexts/SWContext'

type SelectFilterProps = {
	name: 'all' | 'genderFilter' | 'speciesFilter' | 'filmsFilter'
	label: string
	content?: FiltersContentSchema[]
	options?: string[]
}

export default function SelectFilter({
	name,
	label,
	content,
	options,
}: SelectFilterProps) {
	const { setFilterType, setFilterValue, filterValue } = useContext(SWContext)

	return (
		<div className="flex flex-col">
			<label htmlFor={name} className="text-[11px] font-bold">
				{label}
			</label>
			<select
				name={name}
				className="bg-black text-[10px]"
				id={name}
				value={filterValue}
				onChange={(event) => {
					event.preventDefault()
					if (event.target.value === 'all') {
						setFilterType('all')
						setFilterValue('all')
					} else {
						setFilterType(name)
						setFilterValue(event.target.value)
					}
				}}
			>
				<option value="all">all</option>
				{content &&
					content.map((item) => (
						<option key={nanoid()} value={item.url}>
							{item.name}
						</option>
					))}

				{options &&
					options.map((option) => (
						<option key={nanoid()} value={option}>
							{option}
						</option>
					))}
			</select>
		</div>
	)
}
