type PaginationButtonProps = {
	title: string
	callback: Function
}

export function PaginationButton({ title, callback }: PaginationButtonProps) {
	return (
		<button
			onClick={() => {
				callback()
			}}
			className="border border-white bg-transparent text-xs"
		>
			{title}
		</button>
	)
}
