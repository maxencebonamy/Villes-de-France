import { GeoJsonMultiPolygonSchema, GeoJsonPointSchema, GeoJsonPolygonSchema } from "@/lib/utils/geojson"
import { z } from "zod"

export const ApiSimpleCitySchema = z.object({
	code: z.string(),
	nom: z.string(),
	population: z.number().optional(),
	centre: GeoJsonPointSchema
})
export type ApiSimpleCity = z.infer<typeof ApiSimpleCitySchema>

export const ApiCitySchema = ApiSimpleCitySchema.extend({
	contour: z.union([GeoJsonPolygonSchema, GeoJsonMultiPolygonSchema])
})
export type ApiCity = z.infer<typeof ApiCitySchema>


export const SimpleCitySchema = z.object({
	id: z.string(),
	name: z.string(),
	population: z.number(),
	center: GeoJsonPointSchema
})
export type SimpleCity = z.infer<typeof SimpleCitySchema>

export const CitySchema = SimpleCitySchema.extend({
	bounds: z.union([GeoJsonPolygonSchema, GeoJsonMultiPolygonSchema])
})
export type City = z.infer<typeof CitySchema>