"use client"

import type { ReactElement } from "react"
import type { MapProps } from "."
import MapLibre from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"
import { useTheme } from "next-themes"
import { env } from "@/env"

export const Map = ({ children, style, onClick }: MapProps): ReactElement => {
	const { theme } = useTheme()
	const MAPTILER_KEY = env.NEXT_PUBLIC_MAPTILER_API

	return (
		<MapLibre
			initialViewState={{
				longitude: 3.5,
				latitude: 46.6,
				zoom: 5.3
			}}
			styleDiffing
			mapStyle={`/map-style${theme === "dark" ? "-dark" : ""}.json?key=${MAPTILER_KEY}`}
			minZoom={1}
			onClick={onClick}
			cursor="crosshair"
			style={style}
		>
			{Array.isArray(children) ? children.filter(Boolean) : children}
		</MapLibre>
	)
}