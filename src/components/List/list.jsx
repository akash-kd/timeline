import { Bin } from '../Icons/bin'
import styles from './style.module.css'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { TimelineState } from '../../state/timelineData'
import {
	addItemAtIndex,
	removeItemAtIndex,
	replaceItemAtIndex,
} from '../../utils/arrayUtils'
import moment from 'moment'
import Star from '../Icons/start'

export default function List({ date, onRemoveClick }) {
	const [items, setItems] = useRecoilState(TimelineState)
	const [focus, setFocus] = useState(
		new Array(items[date] ? items[date]?.length : 0).fill(false),
	)

	// useEffect(() => {
	// 	console.log('focus', focus)
	// }, [focus])

	if (items[date] === undefined || items[date]?.length === 0) {
		return (
			<div className={styles.main}>
				<p>- No Actions</p>
			</div>
		)
	}

	const onEnter = (e, index) => {
		if (e.code === 'Enter') {
			setItems((prev) => {
				let newItems = { ...prev }
				newItems[date] = addItemAtIndex(newItems[date], index + 1, '')
				return newItems
			})
			setFocus(() => {
				let newArr = new Array(
					items[date] ? items[date]?.length : 0,
				).fill(false)
				newArr[index + 1] = true
				return newArr
			})
		}
	}

	const onSave = ({ target: { value } }, index) => {
		setItems((prev) => {
			let newItems = { ...prev }
			newItems[date] = replaceItemAtIndex(newItems[date], index, value)
			return newItems
		})
	}

	const onRemove = (index) => {
		console.log('minus clicked')
		setItems((prev) => {
			let newItems = { ...prev }
			newItems[date] = removeItemAtIndex(items[date], index)
			return newItems
		})
	}

	console.log('Items', items)
	console.log('focus', focus)

	return (
		<div
			className={styles.main}
		>
			{items[date].map((item, index) => {
				// console.log(index, item)
				return (
					<div className={styles.inputContainer} key={index}>
						<p>-&nbsp;</p>

						{date === moment().format('DD-MMM-YYYY') ? (
							<>
								<input
									autoFocus={focus[index]}
									onFocus={() =>
										setFocus((arr) => {
											let newArr = arr
											newArr[index] = true
											return [...newArr]
										})
									}
									onBlur={() =>
										setFocus((arr) => {
											let newArr = arr
											newArr[index] = false
											return [...newArr]
										})
									}
									// defaultValue={item}
									value={item}
									type='text'
									className={styles.input}
									maxLength={35}
									onKeyUp={(e) => onEnter(e, index)}
									onChange={(e) => onSave(e, index)}
								/>
								{/* <p className={styles.input}>{item}</p> */}
								{/* {focus[index] === true ? ( */}
								<Bin onClick={() => onRemove(index)} />
								{/* ) : (
								<></>
							)} */}
							</>
						) : (
							<div className={styles.item}>
								<p className={styles.itemContent}>{item}</p>
								<Star />
							</div>
						)}
					</div>
				)
			})}
		</div>
	)

	// return (
	// 	<div className={styles.main}>
	// 		{items[date].map((item, index) => {
	// 			return <div key={index}>SOMSOMSOM</div>
	// 		})}
	// 	</div>
	// )
}
