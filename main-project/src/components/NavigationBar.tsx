import { useHistory } from 'react-router-dom'
import { PaginationButton } from './PaginationButton'

export default function NavigationBar() {
	const router = useHistory()

	return (
		<div className="mx-auto">
			<PaginationButton
				disabled={false}
				callback={() => router.push('/')}
				title="Homepage"
			/>
		</div>
	)
}
