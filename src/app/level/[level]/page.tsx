"use client"

import { useEffect, useState, type ReactElement } from "react"
import type { MapLayerMouseEvent } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"
import { useQuery } from "@tanstack/react-query"
import { getAllCities, getCityById } from "@/lib/actions/cities"
import { getLevelFromPageProps, getRandomCityIdsByLevel } from "@/lib/utils/level"
import { getDistanceInKm, getMiddle, getNearestPointInPolygon, isPointInPolygon } from "@/lib/utils/geojson"
import { Loader } from "@/lib/components/atoms/loader"
import { Map } from "@/lib/components/organisms/map"
import { MapMarker } from "@/lib/components/molecules/map-marker"
import { MapLine } from "@/lib/components/molecules/map-line"
import { MapPolygon } from "@/lib/components/molecules/map-polygon"
import { computeScore, type GameState } from "@/lib/utils/game"
import { GamePanel } from "@/lib/components/organisms/game-panel"
import { MapLabel } from "@/lib/components/molecules/map-label"
import type { City } from "@/lib/types/city"
import { EndGameDialog } from "@/lib/components/organisms/end-game-dialog"

export default ({ params }: { params: { level: string } }): ReactElement => {
	const level = getLevelFromPageProps(params)

	const [game, setGame] = useState<GameState>({
		status: "pointing",
		score: 0,
		distance: null,
		cityId: null,
		city: null,
		guessPoint: null,
		nearestPoint: null,
		level,
		round: 1,
		maxRound: 10
	})
	const [cityIds, setCityIds] = useState<City["id"][] | null>(null)

	const { refetch: refetchCurrentCity } = useQuery({ queryKey: ["city", cityIds ? cityIds[game.round - 1] : null], queryFn: async() => {
		if (!cityIds) return null
		const city = await getCityById(cityIds[game.round - 1])
		setGame({ ...game, city })
		return city
	} })

	const { data: cities, isLoading } = useQuery({ queryKey: ["cities"], queryFn: async() => {
		const cities = await getAllCities()
		const result = getRandomCityIdsByLevel(level, game.maxRound, cities)
		setCityIds(result)
		return cities
	} })

	useEffect(() => {
		setGame({ ...game, city: null, guessPoint: null, nearestPoint: null, distance: null })
		void refetchCurrentCity()
	}, [game.round])

	useEffect(() => {
		if (!cityIds) return
		setGame({ ...game, cityId: cityIds[0], round: 1 })
	}, [cityIds])

	const valid = (): void => {
		if (!game.city || !game.guessPoint) return

		let additionalPoints = 0
		let distance = 0
		let nearestPoint = null
		const isInside = isPointInPolygon(game.guessPoint, game.city.bounds)
		if (isInside) additionalPoints = 100
		else {
			nearestPoint = getNearestPointInPolygon(game.guessPoint, game.city.bounds)
			distance = getDistanceInKm(game.guessPoint, nearestPoint)
			additionalPoints = computeScore(distance)
		}
		setGame({ ...game, status: "validating", nearestPoint, score: game.score + additionalPoints, distance })
	}

	const next = (): void => {
		if (!cities) return
		const end = game.round >= game.maxRound
		setGame(game => ({
			...game,
			status: end ? "finished" : "pointing", round: end ? game.round : game.round + 1,
			guessPoint: null, nearestPoint: null, distance: null
		}))
	}

	const onMapClick = (event: MapLayerMouseEvent): void => {
		if (game.status === "pointing") {
			setGame({ ...game, guessPoint: { type: "Point", coordinates: [event.lngLat.lng, event.lngLat.lat] } })
		}
	}

	if (isLoading) return (
		<main className="h-full w-full flex items-center justify-center">
			<Loader className="h-8 w-8" />
		</main>
	)

	return (
		<main className="h-full w-full">
			<GamePanel game={game} onValid={valid} onNext={next} />

			<Map onClick={onMapClick} style={{ width: "100%", height: "100%" }}>
				{game.guessPoint && (
					<MapMarker point={game.guessPoint} color="blue" />
				)}

				{(game.status === "validating" && game.city && game.guessPoint) ? (
					<>
						<MapMarker point={game.city.center} color="red" />
						<MapPolygon id="polygon" polygon={game.city.bounds} color="red" />
						{game.nearestPoint && (
							<MapLine id="line" firstPoint={game.guessPoint} secondPoint={game.nearestPoint} color="red" dashArray={[2, 2]} />
						)}
						<MapLabel point={getMiddle(game.guessPoint, game.nearestPoint ?? game.city.center)}>
							{game.distance ? `${game.distance} km` : "Parfait !"}
						</MapLabel>
					</>
				) : <></>}
			</Map>

			<EndGameDialog open={game.status === "finished"} game={game} />
		</main>
	)
}