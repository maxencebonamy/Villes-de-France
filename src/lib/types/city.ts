import { GeoJsonMultiPolygonSchema, GeoJsonPointSchema, GeoJsonPolygonSchema } from "@/lib/utils/geojson"
import { z } from "zod"

export const ApiSimpleCitySchema = z.object({
	code: z.string(),
	population: z.number().optional()
})
export type ApiSimpleCity = z.infer<typeof ApiSimpleCitySchema>

export const ApiCitySchema = ApiSimpleCitySchema.extend({
	nom: z.string(),
	centre: GeoJsonPointSchema,
	contour: z.union([GeoJsonPolygonSchema, GeoJsonMultiPolygonSchema])
})
export type ApiCity = z.infer<typeof ApiCitySchema>


export const SimpleCitySchema = z.object({
	id: z.string(),
	population: z.number()
})
export type SimpleCity = z.infer<typeof SimpleCitySchema>

export const CitySchema = SimpleCitySchema.extend({
	name: z.string(),
	center: GeoJsonPointSchema,
	bounds: z.union([GeoJsonPolygonSchema, GeoJsonMultiPolygonSchema])
})
export type City = z.infer<typeof CitySchema>