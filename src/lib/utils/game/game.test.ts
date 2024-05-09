import { test, expect } from "vitest"
import { computeScore } from "."

test("computeScore", () => {
	expect(computeScore(0)).toBe(90)
	expect(computeScore(500)).toBeCloseTo(90 * Math.exp(-0.01 * 500))
	expect(computeScore(501)).toBe(0)
})