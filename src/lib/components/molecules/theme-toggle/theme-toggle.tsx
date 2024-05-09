"use client"

import { useEffect, useState, type ReactElement } from "react"
import type { ThemeToggleProps } from "."
import { Switch } from "@/lib/components/shadcnui/ui/switch"
import { useTheme } from "next-themes"

export const ThemeToggle = ({ className = "" }: ThemeToggleProps): ReactElement => {
	const { theme, setTheme } = useTheme()
	const [checked, setChecked] = useState(false)

	const toggleTheme = (): void => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	useEffect(() => {
		setChecked(theme === "dark")
	}, [theme])

	return (
		<Switch checked={checked} onCheckedChange={toggleTheme} className={className} />
	)
}