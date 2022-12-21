import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Homepage } from './pages/homepage'
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom'
import { CharactersProvider } from './contexts/charactersContext'
import { Characters } from './pages/characters'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CharactersProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Homepage />} />
						<Route path='/characters/:name' element={<Characters />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</CharactersProvider>
	</React.StrictMode>
)
