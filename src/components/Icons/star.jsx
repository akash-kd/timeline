export function Star(props) {
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
					stroke='#888888'
					stroke-width='1.8'
					d='M13.75 7.75h-12m6-6v12m-3.5-2.5l7-7m0 7l-7-7'
				></path>
			</svg>
		</div>
	)
}


export function CharmNorthStar(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 16 16'
			className="icon-plane"
			{...props}
		>
			<path
				fill='none'
				stroke='#888888'
				stroke-width='1.8'
				d='M13.75 7.75h-12m6-6v12m-3.5-2.5l7-7m0 7l-7-7'
			></path>
		</svg>
	)
}
