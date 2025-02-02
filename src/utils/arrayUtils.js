export const removeItemAtIndex = (arr, index) => {
	return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export const addItemAtIndex = (arr, index, newValue) => {
	return [...arr.slice(0, index), newValue, ...arr.slice(index)]
}

export const replaceItemAtIndex = (arr, index, newValue) => {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}
