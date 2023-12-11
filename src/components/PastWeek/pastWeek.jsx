import Entry from '../Entry/entry'
import Row from './Row'
import './styles.css'

export default function PastWeek() {
	return (
		<div id='pastweek' className='pastweek'>
			<Entry date='Past Week' />
			<Row />
		</div>
	)
}
