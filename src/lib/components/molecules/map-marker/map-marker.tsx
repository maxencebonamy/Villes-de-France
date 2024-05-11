import type { ReactElement } from "react"
import type { MapMarkerProps } from "."
import { Marker } from "react-map-gl/dist/esm/exports-maplibre"
import { computeGameColor } from "@/lib/utils/style"

export const MapMarker = ({ point, color, onClick }: MapMarkerProps): ReactElement => {
	return (
		<Marker
			longitude={point.coordinates[0]}
			latitude={point.coordinates[1]}
			color={computeGameColor(color)}
			onClick={onClick}
		/>
	)
}