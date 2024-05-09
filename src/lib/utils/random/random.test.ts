import { shuffle } from "@/lib/utils/random/random.util"
import { test, expect } from "vitest"

test("shuffle", () => {
	const array = Array.from({ length: 100 }, (_, i) => i)

	for (let i = 0; i < 20; i++) {
		const shuffledArray = shuffle(array)
		const seen = new Set()

		for (const item of shuffledArray) {
			expect(seen.has(item)).toBe(false)
			seen.add(item)
		}
	}
})