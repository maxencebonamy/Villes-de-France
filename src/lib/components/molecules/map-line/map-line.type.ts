import type { GeoJsonPoint } from "@/lib/utils/geojson"
import type { GameColor } from "@/lib/utils/style"

export type MapLineProps = {
	id: string
	firstPoint: GeoJsonPoint
	secondPoint: GeoJsonPoint
	width?: number
	color: GameColor
	dashArray: [number, number]
}