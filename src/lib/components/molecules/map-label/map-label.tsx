import type { ReactElement } from "react"
import type { MapLabelProps } from "."
import { Marker } from "react-map-gl/dist/esm/exports-maplibre"
import { cn } from "@/lib/utils/style"

export const MapLabel = ({ children, point, classname }: MapLabelProps): ReactElement => {
	const style = cn(
		"font-black italic text-2xl text-primary select-none uppercase transition-all",
		classname
	)

	return (
		<Marker
			longitude={point.coordinates[0]}
			latitude={point.coordinates[1]}
		>
			<p className={style}>
				{children}
			</p>
		</Marker>
	)
}