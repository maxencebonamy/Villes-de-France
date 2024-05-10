import type { ReactElement } from "react"
import type { GameButtonProps } from "."
import { cn } from "@/lib/utils/style"
import { Button } from "@/lib/components/shadcnui/ui/button"
import Link from "next/link"

export const GameButton = ({ children, className, disabled, link, onClick, variant = "default" }: GameButtonProps): ReactElement => {
	const style = cn(
		"font-black italic text-xl uppercase",
		className
	)

	if (link) {
		return (
			<Link href={link}>
				<Button size="lg" className={style} disabled={disabled} onClick={onClick} variant={variant}>
					{children}
				</Button>
			</Link>
		)
	}

	return (
		<Button size="lg" className={style} disabled={disabled} onClick={onClick} variant={variant}>
			{children}
		</Button>
	)
}