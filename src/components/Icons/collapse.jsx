export default function Collapse(props) {
	return (
		<div className='icon' {...props}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				{...props}
			>
				<path
					fill='none'
					stroke='currentColor'
					d='M10.75 4.25h-6.5v6.5m7.5 1l-7.5-7.5'
				></path>
			</svg>
		</div>
	)
}
