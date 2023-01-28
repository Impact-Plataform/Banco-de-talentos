import { nanoid } from 'nanoid'

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
	return (
		<div className="flex flex-col">
			<label htmlFor={name} className="text-[11px] font-bold">
				{label}
			</label>
			<select name={name} className="bg-black text-[10px]">
				<option value="">all</option>
				{options.map((optionItem) => (
					<option key={nanoid()} value={optionItem}>
						{optionItem}
					</option>
				))}
			</select>
		</div>
	)
}
