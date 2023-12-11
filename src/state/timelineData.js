import { atom } from 'recoil'

export const TimelineState = atom({
	key: 'TimelineData',

	// when development remove the local storage for better developer experience
	default: JSON.parse(localStorage.getItem('data')) || {},
})
