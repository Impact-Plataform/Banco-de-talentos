import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { SWContext } from './contexts/SWContext'

type SelectFilterProps = {
	options: string[]
	name: string
	label?: string
}

export default function SelectFilter({
	options,
	name,
	label,
}: SelectFilterProps) {
	const { setFilterType, setFilterValue } = useContext(SWContext)

	return (
		<div className="flex flex-col">
			<label htmlFor={name} className="text-[11px] font-bold">
				{label}
			</label>
			<select
				name={name}
				className="bg-black text-[10px]"
				id={name}
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
				<option value="all">all</option>
				{options.map((optionItem) => (
					<option key={nanoid()} value={optionItem}>
						{optionItem}
					</option>
				))}
			</select>
		</div>
	)
}
