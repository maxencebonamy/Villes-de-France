import type { CSSProperties, ReactElement } from "react"
import type { MapLayerMouseEvent } from "react-map-gl/dist/esm/exports-maplibre"

export type MapProps = {
	children?: (ReactElement | null) | (ReactElement | null)[]
	style?: CSSProperties
	onClick?: (event: MapLayerMouseEvent) => void
}