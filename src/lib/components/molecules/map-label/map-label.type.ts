import type { GeoJsonPoint } from "@/lib/utils/geojson"

export type MapLabelProps = {
	point: GeoJsonPoint
	children: string
	classname?: string
}