import { useEffect } from 'react'
import { TimelineState } from '../../state/timelineData'
import Entry from '../Entry/entry'
import List from '../List/list'
import './styles.css'
import { useRecoilState } from 'recoil'

export default function Day({ date, current = false }) {
	const [items, setItems] = useRecoilState(TimelineState)
	const onAddClick = () => {
		setItems((prev) => {
			let newItems = { ...prev }
			if (newItems[date] === undefined) newItems[date] = []
			newItems[date] = [...newItems[date], '']
			return newItems
		})
	}

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(items))
	}, [items])

	return (
		<div className='day' id={date}>
			<Entry date={date} current={current} onAddClick={onAddClick} />
			<List date={date} />
		</div>
	)
}
