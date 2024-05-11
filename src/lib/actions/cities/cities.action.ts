import type { City, SimpleCity } from "@/lib/types/city"
import { ApiCitySchema, ApiSimpleCitySchema } from "@/lib/types/city"
import { queryAndValidate } from "@/lib/utils/api"
import { z } from "zod"

export const getAllCities = async(): Promise<SimpleCity[]> => {
	const response = await queryAndValidate({
		route: "communes",
		params: {
			fields: "code,nom,population,centre",
			zone: "metro"
		},
		responseSchema: z.array(ApiSimpleCitySchema)
	})

	if (response.status === "error") {
		throw new Error(response.error)
	}

	return response.data.map(city => ({
		id: city.code,
		name: city.nom,
		population: city.population ?? 0,
		center: city.centre
	}))
}

export const getCityById = async(id: SimpleCity["id"]): Promise<City> => {
	const response = await queryAndValidate({
		route: `communes/${id}`,
		params: {
			fields: "code,nom,population,centre,contour"
		},
		responseSchema: ApiCitySchema
	})

	if (response.status === "error") {
		throw new Error(response.error)
	}

	return {
		id: response.data.code,
		name: response.data.nom,
		population: response.data.population ?? 0,
		center: response.data.centre,
		bounds: response.data.contour
	}
}