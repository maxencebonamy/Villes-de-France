import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {
	},
	client: {
		NEXT_PUBLIC_CITIES_API: z.string().url()
	},
	runtimeEnv: {
		NEXT_PUBLIC_CITIES_API: process.env.NEXT_PUBLIC_CITIES_API
	}
})