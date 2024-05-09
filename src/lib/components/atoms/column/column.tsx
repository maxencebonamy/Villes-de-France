import type { ReactElement } from "react"
import type { ColumnProps } from "."
import { cn } from "@/lib/utils/style"

export const Column = ({ children, className = "" }: ColumnProps): ReactElement => {
	const style = cn(
		"flex flex-col",
		className
	)

	return (
		<div className={style}>
			{children}
		</div>
	)
}

<div>
	<Column className="dsqdsqdqs">
		<div></div>
	</Column>
</div>