export default function Shape() {
	return (
		<svg
			width='500'
			height='50'
			viewBox='0 0 500 50'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<a xlink:href='{{ item.url }}'>
				<path
					d='M499 49H1V1H481.586L490.293 9.70711L499 18.4142V49Z'
					stroke-width='2'
				/>
				<text x='5%' y='65%' fill='white' class='text-2xl'>
					SOME
				</text>
			</a>
		</svg>
	)
}
