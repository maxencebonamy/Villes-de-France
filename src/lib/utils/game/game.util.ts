export const computeScore = (distance: number): number => {
	if (distance <= 0) {
		return 90
	} else if (distance > 0 && distance <= 500) {
		return Math.floor(90 * Math.exp(-0.01 * distance))
	} else {
		return 0
	}
}