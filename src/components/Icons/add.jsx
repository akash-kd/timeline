import './style.css'

export function Add(props) {
	return (
		<div className='icon' {...props}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
			>
				<path
					fill='none'
					stroke='currentColor'
					d='M12.75 7.75h-10m5-5v10'
				></path>
			</svg>
		</div>
	)
}
