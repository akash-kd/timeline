import { useRef, useState } from 'react'
import './styles.css'
export default function Input({index, setItems, inputMode, defaultValue}) {
	const input = useRef(null)
	const [text, setText] = useState('')
	const [caretPosition, setCaretPosition] = useState(0)
	const [focus, setFocus] = useState(inputMode);


	const onDivClick = () => {
		input.current.focus()
		setFocus(true);
	}
	const onInputKeyUp = (e) => {
		setCaretPosition(input.current.selectionEnd)
	}

	return (
		<div className='inputMain'>
			<div className='inputContainer' onClick={onDivClick}>
				<span
					className={`${focus ? 'cursor blink' : ''}`}
					style={{
						left: `${caretPosition == 0 ? 1 : caretPosition}ch`,
					}}
				></span>
				{defaultValue || text}
			</div>
			<input
				autoFocus={focus}
				onBlur={() => setFocus(false)}
				style={{ width: 0, opacity: 0 }}
				defaultValue={defaultValue}
				maxLength={40}
				ref={input}
				type='text'
				onKeyUp={onInputKeyUp}
				onChange={({ target: { value } }) => {
					setText(value)
					setCaretPosition(input.current.selectionEnd)
				}}
			></input>
		</div>
	)
}
