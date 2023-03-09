import { useContext } from 'react'
import { SWContext } from '../contexts/SWContext'
import { PaginationButton } from './PaginationButton'

export const GroupPaginationButtons = () => {
	const { pagination, next, previous, setPagination, filterType } =
		useContext(SWContext)
	return (
		<div className="flex justify-evenly">
			<PaginationButton
				title="previous"
				disabled={Boolean(!previous)}
				isButtonVisible={Boolean(filterType === 'all')}
				callback={() => {
					if (previous) {
						setPagination(pagination! - 1)
					}
				}}
			/>

			<PaginationButton
				title="next"
				disabled={Boolean(!next)}
				isButtonVisible={Boolean(filterType === 'all')}
				callback={() => {
					if (next) {
						setPagination(pagination! + 1)
					}
				}}
			/>
		</div>
	)
}
