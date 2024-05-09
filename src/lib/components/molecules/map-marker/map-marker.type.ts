import type { GeoJsonPoint } from "@/lib/utils/geojson"
import type { GameColor } from "@/lib/utils/style"

export type MapMarkerProps = {
	point: GeoJsonPoint
	color: GameColor
}