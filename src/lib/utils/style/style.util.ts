import type { GameColor } from "@/lib/utils/style/style.type"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(inputs))
}

export const breakpoints = {
	SM: 640,
	MD: 768,
	LG: 1024,
	XL: 1280,
	XXL: 1536
}

export const computeGameColor = (color: GameColor): string => {
	switch (color) {
	case "red":
		return "hsl(0 92.99% 56.11%)"
	case "blue":
		return "hsl(220.47 98.26% 36.08%)"
	}
}