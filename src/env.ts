import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {
	},
	client: {
		NEXT_PUBLIC_CITIES_API: z.string().url(),
		NEXT_PUBLIC_MAPTILER_API: z.string()
	},
	runtimeEnv: {
		NEXT_PUBLIC_CITIES_API: process.env.NEXT_PUBLIC_CITIES_API,
		NEXT_PUBLIC_MAPTILER_API: process.env.NEXT_PUBLIC_MAPTILER_API
	}
})