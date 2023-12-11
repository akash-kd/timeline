import './style.css'

export function Bin({ onClick}) {
	return (
		<div className='icon' onClick={onClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
			>
				<path
					fill='none'
					stroke='currentColor'
					d='M13.25 7.75H2.75'
				></path>
			</svg>
		</div>
	)
}
