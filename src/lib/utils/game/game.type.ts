import type { City } from "@/lib/types/city"
import type { GeoJsonPoint } from "@/lib/utils/geojson"

export type GameState = {
	status: "pointing" | "validating" | "finished"
	score: number
	distance: number | null
	cityId: City["id"] | null
	city: City | null
	guessPoint: GeoJsonPoint | null
	nearestPoint: GeoJsonPoint | null
	level: number
	round: number
	maxRound: number
}