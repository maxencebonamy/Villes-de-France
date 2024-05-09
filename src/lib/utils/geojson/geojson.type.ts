import { z } from "zod"

export const GeoJsonPointSchema = z.object({
	type: z.literal("Point"),
	coordinates: z.tuple([z.number(), z.number()])
})
export type GeoJsonPoint = z.infer<typeof GeoJsonPointSchema>

export const GeoJsonPolygonSchema = z.object({
	type: z.literal("Polygon"),
	coordinates: z.array(z.array(z.tuple([z.number(), z.number()])))
})
export type GeoJsonPolygon = z.infer<typeof GeoJsonPolygonSchema>

export const GeoJsonMultiPolygonSchema = z.object({
	type: z.literal("MultiPolygon"),
	coordinates: z.array(z.array(z.array(z.tuple([z.number(), z.number()]))))
})
export type GeoJsonMultiPolygon = z.infer<typeof GeoJsonMultiPolygonSchema>