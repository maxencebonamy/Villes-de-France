import { choice } from "@/lib/utils/random"
import type { GetPopulationBoundsByLevelFunction, GetRandomCityIdByLevelFunction, GetRandomCityIdsByLevelFunction, Level } from "./level.type"
import { City } from "@/lib/types/city"
import { shuffle } from "@/lib/utils/random/random.util"

const LEVELS: Level[] = [
	{ id: 1, name: "Débutant", min: 100000, max: Number.MAX_SAFE_INTEGER },
	{ id: 2, name: "Intermédiaire", min: 60000, max: 99999 },
	{ id: 3, name: "Avancé", min: 45000, max: 59999 },
	{ id: 4, name: "Expert", min: 35000, max: 44999 },
	{ id: 5, name: "Maître", min: 28000, max: 34999 },
	{ id: 6, name: "Légendaire", min: 23000, max: 27999 },
	{ id: 7, name: "Ultime", min: 20000, max: 22999 }
]

export const existsLevel = (level: number): boolean => LEVELS.some(l => l.id === level)

export const getLevelById = (level: number): Level => {
	const levelData = LEVELS.find(l => l.id === level)

	if (!levelData) {
		throw new Error("Invalid level name")
	}

	return levelData
}

export const getAllLevelIds = (): number[] => LEVELS.map(l => l.id)
export const getPopulationBoundsByLevel: GetPopulationBoundsByLevelFunction = (level) => {
	const levelData = LEVELS.find(l => l.id === level)

	if (!levelData) {
		throw new Error("Invalid level name")
	}

	return {
		min: levelData.min,
		max: levelData.max
	}
}

export const getRandomCityIdByLevel: GetRandomCityIdByLevelFunction = (level, cities) => {
	const { min, max } = getPopulationBoundsByLevel(level)

	const filteredCities = cities.filter(city => city.population >= min && city.population <= max)
	if (filteredCities.length === 0) {
		throw new Error("No city found for this level")
	}

	return choice(filteredCities).id
}

export const getRandomCityIdsByLevel: GetRandomCityIdsByLevelFunction = (level, nbCities, cities) => {
	const { min, max } = getPopulationBoundsByLevel(level)

	const filteredCities = cities.filter(city => city.population >= min && city.population <= max)
	if (filteredCities.length === 0) {
		throw new Error("No city found for this level")
	}

	return shuffle(filteredCities).slice(0, nbCities).map(city => city.id)
}