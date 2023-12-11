import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Intro from './pages/Intro/Intro.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'

var intro = localStorage.getItem('intro')
if (intro === null) {
	ReactDOM.createRoot(document.getElementById('root')).render(
		<React.StrictMode>
			<Intro />
		</React.StrictMode>,
	)
} else {
	ReactDOM.createRoot(document.getElementById('root')).render(
		<RecoilRoot>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</RecoilRoot>,
	)
}
