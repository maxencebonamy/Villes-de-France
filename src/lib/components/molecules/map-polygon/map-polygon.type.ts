import type { GeoJsonMultiPolygon, GeoJsonPolygon } from "@/lib/utils/geojson"
import type { GameColor } from "@/lib/utils/style"

export type MapPolygonProps = {
	id: string
	polygon: GeoJsonPolygon | GeoJsonMultiPolygon
	width?: number
	color: GameColor
}