import type { ReactElement } from "react"
import type { MapPolygonProps } from "."
import { Layer, Source } from "react-map-gl/dist/esm/exports-maplibre"
import { computeGameColor } from "@/lib/utils/style"

export const MapPolygon = ({ id, polygon, color, width = 2 }: MapPolygonProps): ReactElement => {
	return (
		<>
			<Source
				id={id}
				type="geojson"
				data={{
					type: "Feature",
					properties: {},
					geometry: polygon
				}}
			/>

			<Layer
				id={id}
				type="line"
				source={id}
				paint={{
					"line-color": computeGameColor(color),
					"line-width": width
				}}
			/>
		</>
	)
}