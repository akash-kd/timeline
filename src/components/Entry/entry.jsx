import { Add } from '../Icons/add'
import { Edit } from '../Icons/edit'
import './style.css'

export default function Entry({ date, current = false, onAddClick }) {
	return (
		<div className='main'>
			{/* <div className={styles.rect}></div> */}
			<div className='divider1'></div>
			{current === true ? (
				<svg
					width='270'
					height='48'
					viewBox='0 0 270 48'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='box'
				>
					<path d='M6 3H3V6V35.5V36.7426L3.87868 37.6213L10.3787 44.1213L11.2574 45H12.5H264H267V42V6V3H264H6Z' />
					<text x='50%' y='68%' textAnchor='middle'>
						{date}
					</text>
				</svg>
			) : (
				<p className={`date ${current === true ? ' current' : ''}`}>
					{date}{' '}
				</p>
			)}

			<div className='divider2'></div>
			{/* {current ? <Edit style={{ borderRight: 0 }} onClick={onAddClick} /> : <></>} */}
			{current ? <Add onClick={onAddClick} /> : <></>}
			<div className='divider3'></div>
		</div>
	)
}
