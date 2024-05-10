"use client"

import { type ReactElement } from "react"
import "maplibre-gl/dist/maplibre-gl.css"
import { useQuery } from "@tanstack/react-query"
import { getAllCities, getCityById } from "@/lib/actions/cities"
import { getLevelFromPageProps, getPopulationBoundsByLevel } from "@/lib/utils/level"
import { Loader } from "@/lib/components/atoms/loader"
import { Map } from "@/lib/components/organisms/map"
import { MapPolygon } from "@/lib/components/molecules/map-polygon"
import { MapMarker } from "@/lib/components/molecules/map-marker"
import { MapLabel } from "@/lib/components/molecules/map-label"

export default ({ params }: { params: { level: string } }): ReactElement => {
	const level = getLevelFromPageProps(params)

	const { data: cities, isLoading } = useQuery({ queryKey: ["cities", level], queryFn: async() => {
		const { min, max } = getPopulationBoundsByLevel(level)
		const allCities = (await getAllCities()).filter(city => city.population >= min && city.population <= max)

		return Promise.all(allCities.map(async(city) => getCityById(city.id)))
	} })

	if (isLoading) return (
		<main className="h-full w-full flex items-center justify-center">
			<Loader className="h-8 w-8" />
		</main>
	)

	return (
		<main className="h-full w-full">
			<Map style={{ width: "100%", height: "100%" }}>
				{cities && cities.map(city => (
					<>
						<MapPolygon key={city.id} id={`polygon-${city.id}`} color="blue" polygon={city.bounds} />
						<MapMarker key={city.id} color="blue" point={city.center} />
						<MapLabel key={city.id} point={city.center} classname="text-lg pt-8">
							{city.name}
						</MapLabel>
					</>
				))}
			</Map>
		</main>
	)
}