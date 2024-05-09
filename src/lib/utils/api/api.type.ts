import type { z } from "zod"

export type QueryAndValidateRequest<T> = {
	route: string
	params?: Record<string, string>
	delay?: number
	responseSchema: z.ZodType<T>
}

export type QueryAndValidateResponse<T> = {
	status: "success"
	data: T
} | {
	status: "error"
	error: string
}