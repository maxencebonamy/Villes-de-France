import type { ReactElement } from "react"
import type { MapLineProps } from "."
import { Layer, Source } from "react-map-gl/dist/esm/exports-maplibre"
import { computeGameColor } from "@/lib/utils/style"

export const MapLine = ({ id, firstPoint, secondPoint, color, dashArray, width = 2 }: MapLineProps): ReactElement => {
	return (
		<>
			<Source
				id={id}
				type="geojson"
				data={{
					type: "Feature",
					properties: {},
					geometry: {
						type: "LineString",
						coordinates: [
							[firstPoint.coordinates[0], firstPoint.coordinates[1]],
							[secondPoint.coordinates[0], secondPoint.coordinates[1]]
						]
					}
				}}
			/>

			<Layer
				id={id}
				type="line"
				source={id}
				paint={{
					"line-color": computeGameColor(color),
					"line-width": width,
					"line-dasharray": dashArray
				}}
			/>
		</>
	)
}