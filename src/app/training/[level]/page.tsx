"use client"

import { useEffect, useState, type ReactElement } from "react"
import "maplibre-gl/dist/maplibre-gl.css"
import { useQuery } from "@tanstack/react-query"
import { getAllCities, getCityById } from "@/lib/actions/cities"
import { getLevelFromPageProps, getPopulationBoundsByLevel } from "@/lib/utils/level"
import { Loader } from "@/lib/components/atoms/loader"
import { Map } from "@/lib/components/organisms/map"
import { MapPolygon } from "@/lib/components/molecules/map-polygon"
import { MapMarker } from "@/lib/components/molecules/map-marker"
import { MapLabel } from "@/lib/components/molecules/map-label"
import type { GeoJsonMultiPolygon, GeoJsonPolygon } from "@/lib/utils/geojson"

export default ({ params }: { params: { level: string } }): ReactElement => {
	const level = getLevelFromPageProps(params)

	const [_, setState] = useState(0)

	const { data: cities, isLoading } = useQuery({ queryKey: ["cities", level], queryFn: async() => {
		const { min, max } = getPopulationBoundsByLevel(level)
		const cities = await getAllCities()
		return cities
			.filter(city => city.population >= min && city.population <= max)
			.map(city => ({ ...city, bounds: null as GeoJsonPolygon | GeoJsonMultiPolygon | null }))
	} })

	useEffect(() => {
		if (!cities) return
		void Promise.all(cities.map(async(city) => {
			const fullCity = await getCityById(city.id)
			city.bounds = fullCity.bounds
			setState((state) => (state + 1))
		}))
	}, [isLoading])

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
						{city.bounds ? (
							<MapPolygon key={`polygon-${city.id}`} id={`polygon-${city.id}`} color="blue" polygon={city.bounds} />
						) : <></>}
						<MapMarker key={`marker-${city.id}`} color="blue" point={city.center} />
						<MapLabel key={`label-${city.id}`} point={city.center} classname="text-md pt-8">
							{city.name}
						</MapLabel>
					</>
				))}
			</Map>
		</main>
	)
}