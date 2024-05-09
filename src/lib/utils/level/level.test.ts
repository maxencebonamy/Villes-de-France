import { existsLevel, getPopulationBoundsByLevel } from "@/lib/utils/level/level.util"
import { test, expect } from "vitest"

test("existsLevel", () => {
	expect(existsLevel(0)).toBe(false)
	expect(existsLevel(1)).toBe(true)
	expect(existsLevel(8)).toBe(false)
	expect(existsLevel(1.4)).toBe(false)
	expect(existsLevel(-4)).toBe(false)
})

test("getPopulationBoundsByLevel", () => {
	expect(getPopulationBoundsByLevel(1)).toEqual({ min: 100000, max: Number.MAX_SAFE_INTEGER })
	expect(getPopulationBoundsByLevel(2)).toEqual({ min: 60000, max: 99999 })
	expect(getPopulationBoundsByLevel(3)).toEqual({ min: 45000, max: 59999 })
	expect(getPopulationBoundsByLevel(4)).toEqual({ min: 35000, max: 44999 })
	expect(getPopulationBoundsByLevel(5)).toEqual({ min: 28000, max: 34999 })
	expect(getPopulationBoundsByLevel(6)).toEqual({ min: 23000, max: 27999 })
	expect(getPopulationBoundsByLevel(7)).toEqual({ min: 20000, max: 22999 })
	expect(() => getPopulationBoundsByLevel(0)).toThrow()
	expect(() => getPopulationBoundsByLevel(8)).toThrow()
	expect(() => getPopulationBoundsByLevel(1.4)).toThrow()
	expect(() => getPopulationBoundsByLevel(-4)).toThrow()
})