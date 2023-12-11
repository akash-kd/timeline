import styles from './style.module.css'

export default function Button({ text, style, onClick }) {
	return (
		<button className={styles.button} style={style} onClick={onClick}>
			{text}
		</button>
	)
}
