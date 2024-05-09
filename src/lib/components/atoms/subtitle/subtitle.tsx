import type { ReactElement } from "react"
import type { SubtitleProps } from "."
import { cn } from "@/lib/utils/style"

export const Subtitle = ({ className, children }: SubtitleProps): ReactElement => {
	const style = cn(
		"font-black italic text-2xl uppercase text-primary",
		className
	)

	return (
		<h2 className={style}>
			{children}
		</h2>
	)
}