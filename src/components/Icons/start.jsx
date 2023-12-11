export default function Star(props) {
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
					stroke-width='1.8'
					d='M1.25 8L8 14.75L14.75 8L8 1.25z'
				></path>
			</svg>
		</div>
	)
}
