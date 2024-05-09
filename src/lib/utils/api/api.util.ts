import type { QueryAndValidateRequest, QueryAndValidateResponse } from "./api.type"
import { wait } from "@/lib/utils/time"
import { env } from "@/env"

const buildUrl = (route: string, params?: Record<string, string>): string => {
	if (route.startsWith("/")) route = route.slice(1)

	let url = env.NEXT_PUBLIC_CITIES_API
	if (url.endsWith("/")) url = url.slice(0, -1)
	url += `/${route}`
	if (!params) return url

	url += "?"
	for (const key in params) {
		url += `${key}=${params[key]}&`
	}
	url = url.slice(0, -1)

	return url
}

export const queryAndValidate = async <T>({
	route, params, delay, responseSchema
}: QueryAndValidateRequest<T>): Promise<QueryAndValidateResponse<T>> => {
	if (delay) await wait(delay)

	const response = await fetch(buildUrl(route, params))
	if (!response.ok) return {
		status: "error",
		error: `Failed to fetch GET ${route}: ${response.status} ${response.statusText}`
	}

	let data: unknown = await response.text()
	try {
		data = JSON.parse(data as string)
	} catch (error) { /* Do nothing */ }

	const parsedBody = responseSchema.safeParse(data)
	if (!parsedBody.success) {
		console.error("Failed to validate GET", route, parsedBody.error)
		return {
			status: "error",
			error: `Failed to validate GET ${route}: ${parsedBody.error.message}`
		}
	}

	return {
		status: "success",
		data: parsedBody.data
	}
}