"use client"

import { Button } from "@/lib/components/shadcnui/ui/button"
import type { ReactElement } from "react"
import { useEffect } from "react"

type ErrorProps = {
	error: Error & { digest?: string }
	reset: () => void
}

export default ({ error, reset }: ErrorProps): ReactElement => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<main className="flex flex-col items-center justify-center w-full py-64 gap-2">
			<h1 className="text-6xl font-semibold uppercase">Oops!</h1>
			<p className="text-lg">Sorry, an unexpected error occurred...</p>
			<Button onClick={reset} className="mt-4">Try again</Button>
		</main>
	)
}