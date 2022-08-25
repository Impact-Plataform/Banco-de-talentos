import { Outlet } from 'react-router-dom'
import { Reset } from 'styled-reset'

export const App = () => {
	return (
		<>
			<Reset />
			<Outlet />
		</>
	)
}
