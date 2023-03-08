type PaginationButtonProps = {
	title: string
	callback: Function
	disabled: boolean
}

export function PaginationButton({
	title,
	callback,
	disabled,
}: PaginationButtonProps) {
	return (
		<button
			onClick={() => {
				callback()
			}}
			disabled={disabled}
			className="border border-white bg-transparent text-xs py-1 px-2 rounded-md"
		>
			{title}
		</button>
	)
}
