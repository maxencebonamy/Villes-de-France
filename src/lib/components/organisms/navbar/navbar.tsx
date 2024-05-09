"use client"

import type { ReactElement } from "react"
import type { NavbarProps } from "."
import { cn } from "@/lib/utils/style"
import { ThemeToggle } from "@/lib/components/molecules/theme-toggle"
import { Row } from "@/lib/components/atoms/row"
import { usePathname } from "next/navigation"
import { Title } from "@/lib/components/atoms/title"
import { HomeButton } from "@/lib/components/molecules/home-button"

export const Navbar = ({ className }: NavbarProps): ReactElement => {
	const style = cn(
		"w-full h-16 px-8 flex justify-between items-center",
		"fixed top-0 left-0 z-20",
		"border-b-[0.1rem] bg-background/50 backdrop-blur-md drop-shadow-sm transition-all",
		className
	)

	const pathName = usePathname()

	return (
		<nav className={style}>
			<span className="w-12 justify-start">
				{pathName !== "/" && (
					<HomeButton />
				)}
			</span>

			<Row className="gap-8 items-center">
				<Title className="max-xl:text-sm">
					Villes de France
				</Title>
			</Row>

			<Row className="w-12 justify-end">
				<ThemeToggle />
			</Row>
		</nav>
	)
}