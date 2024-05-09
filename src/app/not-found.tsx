import type { ReactElement } from "react"

export default (): ReactElement => {
	return (
		<main className="flex flex-col items-center justify-center w-full py-64 gap-2">
			<h1 className="text-6xl font-semibold uppercase">404</h1>
			<p className="text-lg">This page could not be found...</p>
		</main>
	)
}