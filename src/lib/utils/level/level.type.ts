import type { SimpleCity } from "@/lib/types/city"
import { z } from "zod"

export const LevelNameSchema = z.enum([
	"Débutant",
	"Intermédiaire",
	"Avancé",
	"Expert",
	"Maître",
	"Légendaire",
	"Ultime"
])
export type LevelName = z.infer<typeof LevelNameSchema>

export const LevelSchema = z.object({
	id: z.number(),
	name: LevelNameSchema,
	min: z.number(),
	max: z.number()
})
export type Level = z.infer<typeof LevelSchema>

export type GetPopulationBoundsByLevelFunction = (level: number) => { min: number, max: number }

export type GetRandomCityIdByLevelFunction = (level: number, cities: SimpleCity[]) => SimpleCity["id"]

export type GetRandomCityIdsByLevelFunction = (level: number, nbCities: number, cities: SimpleCity[]) => SimpleCity["id"][]