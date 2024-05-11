"use client"

import { useState, type ReactElement } from "react"
import type { LevelSelectorProps } from "."
import { Row } from "@/lib/components/atoms/row"
import { getAllLevelIds } from "@/lib/utils/level"
import { LevelCard } from "@/lib/components/molecules/level-card"
import { cn } from "@/lib/utils/style"
import { Column } from "@/lib/components/atoms/column"
import { GameButton } from "@/lib/components/molecules/game-button"

export const LevelSelector = ({ className }: LevelSelectorProps): ReactElement => {
	const [currentLevelId, setCurrentLevelId] = useState<number | null>(null)

	const style = cn(
		"items-center gap-8",
		className
	)

	return (
		<Column className={style}>
			<Row className="justify-center items-stretch gap-4 flex-wrap px-12">
				{
					getAllLevelIds().map((levelId) => (
						<LevelCard key={levelId} levelId={levelId} onClick={setCurrentLevelId} selected={currentLevelId === levelId} />
					))
				}
			</Row>

			<Row className="max-sm:flex-col justify-center items-stretch sm:items-center gap-4">
				<GameButton
					variant="outline" disabled={currentLevelId === null} link={currentLevelId === null ? undefined : `/training/${currentLevelId}`}
				>
					S'entraîner
				</GameButton>

				<GameButton
					disabled={currentLevelId === null} link={currentLevelId === null ? undefined : `/level/${currentLevelId}`}
				>
					Jouer
				</GameButton>
			</Row>
		</Column>
	)
}