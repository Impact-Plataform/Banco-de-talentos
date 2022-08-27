import { Outlet } from 'react-router-dom'
import { Reset } from 'styled-reset'
import { GlobalStyle } from './globalStyles'

export const App = () => {
	return (
		<>
			<Reset />
			<GlobalStyle />
			<Outlet />
		</>
	)
}
