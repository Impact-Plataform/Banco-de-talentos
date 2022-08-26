import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Home } from './pages/home'
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
