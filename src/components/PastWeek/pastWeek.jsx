import { useEffect, useState } from 'react'
import Entry from '../Entry/entry'
import './styles.css'
import moment from 'moment'
import { Star } from '../Icons/star'

import { HighlightsState } from '../../state/highlights'
import { useRecoilState } from 'recoil'
import { css } from '../../../styled-system/css'

export default function PastWeek() {
	const [getDates, setDates] = useState([])
	const [getSelected, setSelected] = useState(0)
	const [getValues, setValues] = useState([])

	const [getHL, setHL] = useRecoilState(HighlightsState)
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'))

		let x = 0
		if (moment().format('dddd') === 'Monday') {
			x = 0
		} else if (moment().format('dddd') === 'Tuesday') {
			x = 1
		} else if (moment().format('dddd') === 'Wednesday') {
			x = 2
		} else if (moment().format('dddd') === 'Thursday') {
			x = 3
		} else if (moment().format('dddd') === 'Friday') {
			x = 4
		} else if (moment().format('dddd') === 'Saturday') {
			x = 5
		} else if (moment().format('dddd') === 'Sunday') {
			x = 6
		}

		let dates = []

		for (let i = 7; i >= 1; i--) {
			let delta = moment().subtract(x, 'days')
			console.log('DATEDELTA', delta.format('DD-MMM-YYYY'))
			dates.push(delta.add(-i, 'days').format('DD-MMM-YYYY'))
		}
		console.log('PW', data[dates[0]])
		setValues(data[dates[0]] ? data[dates[0]] : [])
		setDates(dates)
	}, [])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'))
		setValues(
			data[getDates[getSelected]] ? data[getDates[getSelected]] : [],
		)
	}, [getSelected])

	const onHighLightClick = (item, dateindex) => {
		console.log('ITEM', item, getDates[dateindex])
		// if (data === null || data === undefined) {
		// 	data = []
		// }
		let record = { action: item, date: getDates[dateindex] }
		setHL((HL) => {
			return [...HL, record]
		})
	}

	console.log('Values', getValues)
	return (
		<div id='pastweek' className='pastweek'>
			<Entry date='Pastweek' />
			<div className='pw-flex'>
				{getDates.map((item, index) => {
					return (
						<p
							key={index}
							onClick={() => setSelected(index)}
							className={index === getSelected ? 'selected' : ''}
						>
							{item}
						</p>
					)
				})}
			</div>

			<main className='pw-main'>
				{getValues.length > 0 ? (
					getValues.map((item, index) => {
						return (
							<div
								className={`pw-main-div ${
									getValues.length === 1
										? 'pw-main-div-no-action'
										: ''
								}`}
								key={index}
							>
								<p>{item}</p>
								<div>
									<Star
										onClick={() =>
											onHighLightClick(item, getSelected)
										}
									/>
								</div>
							</div>
						)
					})
				) : (
					<div className='pw-main-div pw-main-div-no-action'>
						<p>No Actions</p>
					</div>
				)}

				{/* <div className='pw-main-div'>
					<p>qwqwertyuiosdfghjklqwertyuioqwertyu</p>
					<div>
						<Star />
					</div>
				</div>
				<div className='pw-main-div'>
					<p>qwqwertyuiosdfghjklqwertyuioqwertyu</p>
					<div>
						<Star />
					</div>
				</div>
				<div className='pw-main-div'>
					<p>qwqwertyuiosdfghjklqwertyuioqwertyu</p>
					<div>
						<Star />
					</div>
				</div>
				<div className='pw-main-div'>
					<p>qwqwertyuiosdfghjklqwertyuioqwertyu</p>
					<div>
						<Star />
					</div>
				</div>
				<div className='pw-main-div'>
					<p>qwqwertyuiosdfghjklqwertyuioqwertyu</p>
					<div>
						<Star />
					</div>
				</div> */}
			</main>
		</div>
	)
}
