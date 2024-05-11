"use client"

import type { ReactElement } from "react"
import type { MapProps } from "."
import MapLibre from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"
import { useTheme } from "next-themes"

export const Map = ({ children, style, onClick }: MapProps): ReactElement => {
	const { theme } = useTheme()

	return (
		<MapLibre
			initialViewState={{
				longitude: 3.5,
				latitude: 46.6,
				zoom: 5.3
			}}
			styleDiffing
			mapStyle={`/map-style${theme === "dark" ? "-dark" : ""}.json`}
			minZoom={1}
			onClick={onClick}
			cursor="crosshair"
			style={style}
			doubleClickZoom={false}
			dragRotate={false}
			scrollZoom={true}
			touchZoomRotate={false}
			dragPan={true}
		>
			{Array.isArray(children) ? children.filter(Boolean) : children}
		</MapLibre>
	)
}