import type { GeoJsonMultiPolygon, GeoJsonPoint, GeoJsonPolygon } from "@/lib/utils/geojson/geojson.type"

const inside = (point: GeoJsonPoint, polygon: GeoJsonPolygon): boolean => {
	const x = point.coordinates[0]
	const y = point.coordinates[1]
	const vs = polygon.coordinates[0]
	let isInside = false
	for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
		const xi = vs[i][0]
		const yi = vs[i][1]
		const xj = vs[j][0]
		const yj = vs[j][1]
		const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
		if (intersect) isInside = !isInside
	}
	return isInside
}

export const isPointInPolygon = (point: GeoJsonPoint, polygon: GeoJsonPolygon | GeoJsonMultiPolygon): boolean => {
	if (polygon.type === "Polygon") return inside(point, polygon)
	if (polygon.type === "MultiPolygon") return polygon.coordinates.some(p => inside(point, { type: "Polygon", coordinates: p }))
	return false
}

const getNearest = (point: GeoJsonPoint, polygon: GeoJsonPolygon): GeoJsonPoint => {
	const x = point.coordinates[0]
	const y = point.coordinates[1]
	const vs = polygon.coordinates[0]
	let minDistance = Number.MAX_VALUE
	let nearestPoint: GeoJsonPoint = { type: "Point", coordinates: [0, 0] }
	for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
		const xi = vs[i][0]
		const yi = vs[i][1]
		const xj = vs[j][0]
		const yj = vs[j][1]
		const a = x - xi
		const b = y - yi
		const c = xj - xi
		const d = yj - yi
		const dot = a * c + b * d
		const lenSq = c * c + d * d
		const param = lenSq !== 0 ? dot / lenSq : -1
		let xx: number
		let yy: number
		if (param < 0) {
			xx = xi
			yy = yi
		} else if (param > 1) {
			xx = xj
			yy = yj
		} else {
			xx = xi + param * c
			yy = yi + param * d
		}
		const dx = x - xx
		const dy = y - yy
		const distance = Math.sqrt(dx * dx + dy * dy)
		if (distance < minDistance) {
			minDistance = distance
			nearestPoint = { type: "Point", coordinates: [xx, yy] }
		}
	}
	return nearestPoint
}

export const getNearestPointInPolygon = (point: GeoJsonPoint, polygon: GeoJsonPolygon | GeoJsonMultiPolygon): GeoJsonPoint => {
	if (polygon.type === "Polygon") return getNearest(point, polygon)
	if (polygon.type === "MultiPolygon") {
		const nearestPoints = polygon.coordinates.map(p => getNearest(point, { type: "Polygon", coordinates: p }))
		let minDistance = Number.MAX_VALUE
		let nearestPoint: GeoJsonPoint = { type: "Point", coordinates: [0, 0] }
		for (const p of nearestPoints) {
			const distance = getDistanceInKm(point, p)
			if (distance < minDistance) {
				minDistance = distance
				nearestPoint = p
			}
		}
		return nearestPoint
	}
	return { type: "Point", coordinates: [0, 0] }
}

const deg2rad = (deg: number): number => deg * (Math.PI / 180)

export const getDistanceInKm = (first: GeoJsonPoint, second: GeoJsonPoint): number => {
	const R = 6371
	const dLat = deg2rad(second.coordinates[1] - first.coordinates[1])
	const dLon = deg2rad(second.coordinates[0] - first.coordinates[0])
	const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
		+ Math.cos(deg2rad(first.coordinates[1])) * Math.cos(deg2rad(second.coordinates[1])) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
	return Math.ceil(R * c)
}

export const getMiddle = (first: GeoJsonPoint, second: GeoJsonPoint): GeoJsonPoint => {
	const x = (first.coordinates[0] + second.coordinates[0]) / 2
	const y = (first.coordinates[1] + second.coordinates[1]) / 2
	return { type: "Point", coordinates: [x, y] }
}