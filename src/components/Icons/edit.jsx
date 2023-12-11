import './style.css'

export function Edit(props) {
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
					d='M1.75 11.25v3h3l9.5-9.5l-3-3zm7-6.5l2.5 2.5'
				></path>
			</svg>
		</div>
	)
}
