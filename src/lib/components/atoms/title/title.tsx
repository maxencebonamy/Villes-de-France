import type { ReactElement } from "react"
import type { TitleProps } from "."
import { cn } from "@/lib/utils/style"

export const Title = ({ className, children }: TitleProps): ReactElement => {
	const style = cn(
		"font-black italic text-3xl text-primary uppercase",
		className
	)

	return (
		<h1 className={style}>
			{children}
		</h1>
	)
}