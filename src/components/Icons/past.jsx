export function CharmGitCompare(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
            viewBox='0 0 16 16'
            className='icon-plane'
			{...props}
		>
			<g
				fill='none'
				stroke='#888888'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.8'
			>
				<circle cx='12.5' cy='12.5' r='1.75'></circle>
				<circle cx='3.5' cy='3.5' r='1.75'></circle>
				<path d='M3.75 5.75v5c0 1 .5 1.5 1.5 1.5h2m-.5 2l1.5-2l-1.5-2m5.5 0v-5c0-1-.5-1.5-1.5-1.5h-2m.5-2l-1.5 2l1.5 2'></path>
			</g>
		</svg>
	)
}



export function CharmFlag(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 16 16'
			className='icon-plane'
			{...props}
		>
			<path
				fill='none'
				stroke='#888888'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='1.5'
				d='M1.75 14.25v-11s2-1.5 4-1.5s2.5 1.5 4.5 1.5s4-1.5 4-1.5v7s-2 1.5-4 1.5s-2.5-1.5-4.5-1.5s-4 1.5-4 1.5'
			></path>
		</svg>
	)
}