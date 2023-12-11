import './styles.css'

export function VerticalText(date) {
	return (
		<div className='date-div'>
			<div className='date-div-pw pw-div-1'></div>
			<a className='date-pw'>01-DEC</a>
			<div className='date-div-pw pw-div-2'></div>
		</div>
	)
}

export default function Row() {
	return (
		<div className='pw-main'>
			<VerticalText />
			{/* <svg
				width='200'
				height='140'
				viewBox='0 0 200 140'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M1.5 138.5H198.5V1.5H16.7571L1.5 16.1395V138.5Z'
					stroke='white'
					stroke-width='3'
				/>
				<text x='10px' y='30px' fill='black'>
					Something is
				</text>
				<text x='10px' y='60px' fill='black'>
					better than
				</text>
				<text x='10px' y='90px' fill='black'>
					nothing
				</text>
			</svg> */}
			{/* <p>timeline - pastweek</p> */}

			<div className='row-box'>
                <span> Something is bettern than nothing </span>
                <div> </div>
			</div>
		</div>
	)
}



/* for icon
height: 50px;
width: 50px;
background: blue;
position: relative;
left: 79%;
bottom: 24px;
right: 24px;
*/
