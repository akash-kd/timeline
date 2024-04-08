import { atom } from 'recoil'

export const HighlightsState = atom({
	key: 'Highlights',
	default: JSON.parse(localStorage.getItem('highlights')) || [],
})
