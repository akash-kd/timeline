import { ResponsiveLine } from '@nivo/line'
import { css } from '../../../styled-system/css'
import { useRecoilState } from 'recoil'
import { TimelineState } from '../../state/timelineData'
import moment from 'moment'

export default function Chart() {
	const theme = {
		axis: {
			ticks: {
				text: {
					fill: 'var(--color-1)',
					fontFamily: 'inherit',
				},
				line: {
					stroke: 'var(--color-1)',
				},
			},
		},
		tooltip: {
			container: {
				background: 'var(--color-4)',
				fontSize: '2px !important',
				border: '3px solid var(--color-1)',
				color: 'var(--color-1)',
			},
		},
	}
	const themeData = JSON.parse(localStorage.getItem('theme-data'))
	const [value, _] = useRecoilState(TimelineState)

	let day1 = ''
	for (let prop in value) {
		day1 = prop
		break
	}

	let start = moment(day1, 'DD-MMM-YYYY')
	let end = moment()
	let diff = end.diff(start, 'days')

	console.log("START DATE:", start.format("DD-MMM"))
	console.log("END DATE:", end.format("DD-MMM"))
	let score = 1
	let data = []
	let min = 1000,
		max = -1000
	console.log(diff)

	for (let i = 0; i <= diff; i++) {
		let date = start.format('DD-MMM-YYYY')
		let d = start.format('DD-MM')
		if (value[date]) {
			let count = value[date]?.length || 2
			score = Math.round((score + count / 100) * 100) / 100
		} else {
			score = Math.round((score - 1 / 100) * 100) / 100
		}

		max = Math.max(max, score)
		min = Math.min(min, score)
		data.push({ x: d, y: score })

		start.add(1, 'day')
	}
	console.log(min, max)

	const chartData = [
		{
			id: 'S',
			data: data,
		},
	]
	if (min === 1000 && max === -1000) return <></>
	
	return (
		<div
			className={css({
				height: '400px',
				borderBottom: '3px solid var(--color-1)',
				display: 'flex',
				flexDir:'column',
				alignItems: 'center',
				padding: "30px 0px"
			})}
		>
			Streak Score {score}
			<ResponsiveLine
				data={chartData}
				theme={theme}
				pixelRatio={1}
				colors={[themeData?.color1 || "#082f49"]}
				margin={{ top: 50, left: 50, right: 50, bottom: 50 }}
				curve='catmullRom'
				yScale={{
					type: 'linear',
					min: min,
					max: max,
				}}
				lineWidth={3}
				enableGridX={false}
				enableGridY={false}
				axisRight={null}
				axisBottom={null}
				axisLeft={null}
				pointSize={6}
				useMesh={true}
				enableSlices='x'
				motionConfig='wobbly'
			/>
		</div>
	)
}
