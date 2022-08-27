import { SelectProps } from '../../types'

export const Select = ({ label, type, value, data, onChange }: SelectProps) => {
	return (
		<select
			value={value}
			onChange={(e) => onChange({ [type]: e.target.value })}
		>
			<option key={1} value=''>
				{label}
			</option>
			{data.map((item) => (
				<option key={item.url} value={item.url}>
					{item?.title || item?.name}
				</option>
			))}
		</select>
	)
}
