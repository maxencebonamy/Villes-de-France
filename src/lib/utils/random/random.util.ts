export const randint = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export const choice = <T>(array: T[]): T => {
	return array[randint(0, array.length - 1)]
}

export const shuffle = <T>(array: T[]): T[] => {
	const shuffled = [...array]
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = randint(0, i);
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
	}
	return shuffled
}