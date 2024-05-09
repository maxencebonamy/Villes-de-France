import { isPointInPolygon } from "./geojson.util"
import { test, expect } from "vitest"
import {
	complexPolygon, pointInComplexPolygon, pointInSimpleMultiPolygon, pointInSimplePolygon, pointNotInComplexPolygon,
	pointNotInSimpleMultiPolygon, simpleMultiPolygon, simplePolygon
} from "@/lib/utils/geojson/geojson.test.util"

test("pointInSimplePolygon", () => {
	expect(isPointInPolygon(pointInSimplePolygon, simplePolygon)).toBe(true)
	expect(isPointInPolygon(pointNotInComplexPolygon, simplePolygon)).toBe(false)
})

test("pointInSimpleMultiPolygon", () => {
	expect(isPointInPolygon(pointInSimpleMultiPolygon, simpleMultiPolygon)).toBe(true)
	expect(isPointInPolygon(pointNotInSimpleMultiPolygon, simpleMultiPolygon)).toBe(false)
})

test("pointInComplexPolygon", () => {
	expect(isPointInPolygon(pointInComplexPolygon, complexPolygon)).toBe(true)
	expect(isPointInPolygon(pointNotInComplexPolygon, complexPolygon)).toBe(false)
})