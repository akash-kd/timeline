import { atom } from 'recoil'

export const HighlightsState = atom({
	key: 'Highlights',
	default: JSON.parse(localStorage.getItem('highlights')) || [],
	effects: [
		({ onSet }) => {
			onSet((data) => {
				console.log("Highlights:",data);
				localStorage.setItem('highlights', JSON.stringify(data));
			})
		},
	],
})
