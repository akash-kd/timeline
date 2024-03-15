import Entry from '../Entry/entry'
import { Star, CharmNorthStar } from '../Icons/star'
import { css } from '../../../styled-system/css'
import { useRecoilValue } from 'recoil'
import { HighlightsState } from '../../state/highlights'

export default function Highlights() {
	const values = useRecoilValue(HighlightsState)

	return (
		<div className={css({ scrollSnapAlign: 'start' })} id='hl'>
			<Entry
				date={
					<div
						className={css({
							display: 'flex',
							gap: '10px',
							justifyContent: 'center',
							alignItems: 'center',
						})}
					>
						<CharmNorthStar /> <p>highlights</p>
					</div>
				}
			/>
			<div
				className={css({
					margin: '0px 60px',
				})}
			>
				<div
					className={css({
						display: 'flex',
						gap: '60px',
						width: '100%',
						height: '206px',
						overflowX: 'scroll',
						scrollSnapType: 'x mandatory',
					})}
				>
					{values.map((item, index) => {
						return (
							<div
								key={index}
								className={css({ scrollSnapAlign: 'start' })}
							>
								<div
									style={{
										border: '3px solid var(--color-1)',
									}}
									className={css({
										display: 'flex',
										minWidth: '200px',
										width: '200px',
										height: '180px',
										padding: '0px 10px',
										wordBreak: 'break-all',
									})}
								>
									{item.action}
								</div>
								{/* <div
									style={{
										background: 'var(--color-1)',
                                        color: 'var(--color-4)'
									}}
									className={css({
                                        display: 'flex',
                                        minHeight: '24px',
                                        height: '24px',
										justifyContent: 'center',
										alignItems: 'center',
									})}
								>
									{item.date}
								</div> */}

								<svg
									width='200'
									height='24'
									viewBox='0 0 200 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										style={{
											fill: 'var(--color-1)',
											stroke: 'var(--color-1)',
										}}
										d='M1.5 1.5H198.5V22.5H6.15985L1.5 17.4165V1.5Z'
										strokeWidth='3'
									/>
									<text
										x='50%'
										y='80%'
										textAnchor='middle'
										style={{ fill: 'var(--color-4)' }}
										fontSize='14px !important'
									>
										{item.date}
									</text>
								</svg>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
