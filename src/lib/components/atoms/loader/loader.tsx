import type { ReactElement } from "react"
import type { LoaderProps } from "."
import { Loader2Icon } from "lucide-react"
import { cn } from "@/lib/utils/style"

export const Loader = ({ className }: LoaderProps): ReactElement => {
	const style = cn(
		"animate-spin",
		className
	)

	return (
		<Loader2Icon className={style} />
	)
}