import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "@/lib/styles/globals.css"
import type { PropsWithChildren, ReactElement } from "react"
import { Navbar } from "@/lib/components/organisms/navbar"
import { ThemeProvider } from "@/lib/providers/theme"
import { TanstackQueryProvider } from "@/lib/providers/tanstack-query"

const font = Montserrat({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap"
})

export const metadata: Metadata = {
	title: "Villes de France",
	description: "Vérifie tes connaissances sur les villes de France en repérant leur emplacement sur une carte."
}

export default ({ children }: PropsWithChildren): ReactElement => {
	return (
		<html lang="en">
			<body className={font.className}>
				<TanstackQueryProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
					>
						<Navbar />
						{children}
					</ThemeProvider>
				</TanstackQueryProvider>
			</body>
		</html>
	)
}