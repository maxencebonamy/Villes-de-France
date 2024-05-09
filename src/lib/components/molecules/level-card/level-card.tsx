import type { ReactElement } from "react"
import type { LevelCardProps } from "."
import { getLevelById } from "@/lib/utils/level"
import { Card, CardDescription, CardTitle } from "@/lib/components/shadcnui/ui/card"
import { cn } from "@/lib/utils/style"
import Image from "next/image"

export const LevelCard = ({ levelId, onClick, selected }: LevelCardProps): ReactElement => {
	const level = getLevelById(levelId)

	const style = cn(
		"flex flex-col items-center gap-2 w-full lg:w-1/3 xl:w-1/4 2xl:w-1/5",
		"rounded-lg p-4 cursor-pointer",
		"border border-solid transition-all",
		{ "border-primary": selected }
	)

	return (
		<Card className={style} onClick={() => onClick(levelId)}>
			<Image className="size-28" draggable="false" src={`/levels/${levelId}.png`} alt={`Level ${levelId}`} width={200} height={200} />
			<CardTitle className="text-lg">
				{level.name}
			</CardTitle>
			<CardDescription className="text-sm text-center">
				{
					level.max === Number.MAX_SAFE_INTEGER
						? `Plus de ${level.min} habitants`
						: `Entre ${level.min} et ${level.max + 1} habitants`
				}
			</CardDescription>
		</Card>
	)
}