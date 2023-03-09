import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globalStyle.css'
import { SWContextProvider } from './contexts/SWContext'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<SWContextProvider>
				<App />
			</SWContextProvider>
		</React.StrictMode>
	</BrowserRouter>
)
