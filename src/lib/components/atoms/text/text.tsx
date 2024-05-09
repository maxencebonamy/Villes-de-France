import type { ReactElement } from "react"
import type { TextProps } from "."
import { cn } from "@/lib/utils/style"

export const Text = ({ className, children }: TextProps): ReactElement => {
	const style = cn(
		"text-md font-normal",
		className
	)

	return (
		<p className={style}>
			{children}
		</p>
	)
}