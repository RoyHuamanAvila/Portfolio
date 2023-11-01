import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/custom.scss'
import { Provider } from 'react-redux'
import { store } from './app/store'
import ReactGA from 'react-ga4'

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID)

ReactGA.send({ hitType: 'pageview', page: window.location.pathname })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
