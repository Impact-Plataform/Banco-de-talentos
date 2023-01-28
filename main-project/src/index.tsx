import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globalStyle.css'
import { SWContextProvider } from './contexts/SWContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<SWContextProvider>
			<App />
		</SWContextProvider>
	</React.StrictMode>
)
