import type { ReactElement } from "react"
import type { RowProps } from "."
import { cn } from "@/lib/utils/style"

export const Row = ({ children, className = "" }: RowProps): ReactElement => {
	const style = cn(
		"flex flex-row",
		className
	)

	return (
		<div className={style}>
			{children}
		</div>
	)
}