import './App.css'
import Button from './components/Button/button'
import Day from './components/Day/day'
import moment from 'moment'
import AnimateHeight from 'react-animate-height'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import PastWeek from './components/PastWeek/pastWeek'

function App() {
	// const [isCollapsed, setIsCollapsed] = useState(false)
	const today = moment()
	const [settings, setSettings] = useState(0)
	const [colorIndex, setColorIndex] = useState(0) // get from local stograte

	let dates = []

	if (moment().format('dddd') === 'Monday') {
		dates.push(moment().add(1, 'days'))
		dates.push(moment().add(2, 'days'))
		dates.push(moment().add(3, 'days'))
		dates.push(moment().add(4, 'days'))
		dates.push(moment().add(5, 'days'))
	} else if (moment().format('dddd') === 'Tuesday') {
		dates.push(moment().add(-1, 'days'))
		dates.push(moment())
		dates.push(moment().add(1, 'days'))
		dates.push(moment().add(2, 'days'))
		dates.push(moment().add(3, 'days'))
	} else if (moment().format('dddd') === 'Wednesday') {
		dates.push(moment().add(-2, 'days'))
		dates.push(moment().add(-1, 'days'))
		dates.push(moment())
		dates.push(moment().add(1, 'days'))
		dates.push(moment().add(2, 'days'))
	} else if (moment().format('dddd') === 'Thursday') {
		dates.push(moment().add(-3, 'days'))
		dates.push(moment().add(-2, 'days'))
		dates.push(moment().add(-1, 'days'))
		dates.push(moment())
		dates.push(moment().add(1, 'days'))
	} else if (moment().format('dddd') === 'Friday') {
		dates.push(moment().add(-4, 'days'))
		dates.push(moment().add(-3, 'days'))
		dates.push(moment().add(-2, 'days'))
		dates.push(moment().add(-1, 'days'))
		dates.push(moment())
	}
	// Onle for debuggin purpose, enable staturday, sundayq
	else if (moment().format('dddd') === 'Saturday') {
		dates.push(moment())
		dates.push(moment().add(1, 'days'))
		dates.push(moment().add(2, 'days'))
		dates.push(moment().add(3, 'days'))
		dates.push(moment().add(4, 'days'))
		dates.push(moment().add(5, 'days'))
		dates.push(moment().add(6, 'days'))
		dates.push(moment().add(7, 'days'))
		dates.push(moment().add(8, 'days'))
	}

	useEffect(() => {
		const themeData = JSON.parse(localStorage.getItem('themeData'))
		console.log('theme', themeData)
		if (themeData === null) {
			let themeData = {}
			themeData.color = {
				'--color-1': '#c7d2fe',
				'--color-2': '#4f46e5',
				'--color-3': '#3730a3',
				'--color-4': '#1e1b4b',
			}
			localStorage.setItem('themeData', JSON.stringify(themeData))
		}
	}, [])

	const changeColor = () => {
		let color1 = ['#c7d2fe', '#99f6e4', '#bae6fd', '#bae6fd', '#082f49']
		let color2 = ['#4f46e5', '#0d9488', '#0284c7', '#0284c7', '#075985']
		let color3 = ['#3730a3', '#115e59', '#075985', '#075985', '#0284c7']
		let color4 = ['#1e1b4b', '#042f2e', '#082f49', '#082f49', '#bae6fd']
		console.log(colorIndex)

		document.documentElement.style.setProperty(
			'--color-1',
			color1[colorIndex],
		)
		document.documentElement.style.setProperty(
			'--color-2',
			color2[colorIndex],
		)
		document.documentElement.style.setProperty(
			'--color-3',
			color3[colorIndex],
		)
		document.documentElement.style.setProperty(
			'--color-4',
			color4[colorIndex],
		)

		setColorIndex((index) => {
			if (index == 4) return 0
			return index + 1
		})
	}

	function clearData() {
		localStorage.clear()
		location.reload()
	}

	return (
		<main>
			<div className='main-title'>
				<h1 className='a'>T</h1>
				<h1 className='b'>I</h1>
				<h1 className='c'>M</h1>
				<h1 className='d'>E</h1>
				<h1 className='e'>L</h1>
				<h1 className='f'>I</h1>
				<h1 className='g'>N</h1>
				<h1 className='h'>E</h1>
			</div>
			{/* <Modal isOpen={true} contentLabel='Example Modal'>
				<h2>Hello</h2>
				<button>close</button>
				<div>I am a modal</div>
				<form>
					<input />
					<button>tab navigation</button>
					<button>stays</button>
					<button>inside</button>
					<button>the modal</button>
				</form>
			</Modal> */}
			<main className='main-body'>
				<nav>
					<a style={{ animationDelay: `25ms` }}>Highlights</a>
					<a href='#pastweek' style={{ animationDelay: `50ms` }}>
						Past Week
					</a>
					{dates.map((item, index) => (
						<a
							className={
								item.format('DD') === moment().format('DD')
									? 'current-date'
									: ''
							}
							style={{ animationDelay: `${index * 100 + 150}ms` }}
							key={index}
							href={`#${item.format('DD-MMM-YYYY')}`}
						>
							{item.format('DD MMM YYYY')}
						</a>
					))}
				</nav>
				<section>
					<PastWeek />
					{dates.map((item, index) => (
						<Day
							date={item.format('DD-MMM-YYYY')}
							current={
								item.format('DD') === moment().format('DD')
							}
							key={index}
						/>
					))}

					<div style={{ height: '80%' }}></div>
				</section>
				<aside>
					{/* <article>
						<div className='aside-title'>
							<p>Why ?</p>
							{isCollapsed ? (
								<Expand
									onClick={() => setIsCollapsed(!isCollapsed)}
									style={{ width: '70px', border: 0 }}
								/>
							) : (
								<Collapse
									onClick={() => setIsCollapsed(!isCollapsed)}
									style={{ width: '70px', border: 0 }}
								/>
							)}
						</div>
						{isCollapsed === false ? (
							<div className='aside-main'>
								<p style={{ padding: '0px 20px', margin: 0}}>
									<span className='tab-space' />
									Our Action determines our Glorious Future,
									Record and See, What are your actually
									doing. This Application Puts forward a
									Simple Question.
								</p>
								<p
									className='text-center'
									style={{ padding: '0px 20px' }}
								>
									Are We Really Doing the Actions that pave
									the path to our <br /> dream Future ?
								</p>
							</div>
						) : (
							<></>
						)}
					</article> */}
					<Button
						text='Settings'
						onClick={() => setSettings(settings === 0 ? 'auto' : 0)}
						style={{ animationDelay: '200ms' }}
					/>
					<AnimateHeight
						duration={300}
						height={settings} // see props documentation below
					>
						<div className='setting-dialog'>
							<Button
								text={`Color`}
								onClick={changeColor}
								style={{ animationDelay: '30ms' }}
							/>
							<Button
								text='Font'
								style={{ animationDelay: '60ms' }}
							/>
							<Button
								text='Clear Data'
								onClick={clearData}
								style={{ animationDelay: '90ms' }}
							/>
						</div>
					</AnimateHeight>
					<Button
						text='Feedback'
						style={{ animationDelay: '300ms' }}
					/>
					<Button
						text='Hire Me!'
						style={{ animationDelay: '400ms' }}
					/>
				</aside>
			</main>
		</main>
	)
}

export default App