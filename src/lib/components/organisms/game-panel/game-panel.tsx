import type { ReactElement } from "react"
import type { GamePanelProps } from "."
import { Column } from "@/lib/components/atoms/column"
import { cn } from "@/lib/utils/style"
import { Loader } from "@/lib/components/atoms/loader"
import { Row } from "@/lib/components/atoms/row"
import { getLevelById } from "@/lib/utils/level"
import Image from "next/image"
import { GameButton } from "@/lib/components/molecules/game-button"
import { Subtitle } from "@/lib/components/atoms/subtitle"

export const GamePanel = ({ game, onValid, onNext }: GamePanelProps): ReactElement => {
	const style = cn(
		"absolute z-10 bottom-2 left-2",
		"items-start",
		"max-sm:w-fit xl:min-w-96 px-4 py-3 gap-4",
		"border-[0.1rem] bg-background/50 backdrop-blur-md drop-shadow-sm rounded-md",
		"transition-all"
	)

	return (
		<Column className={style}>
			{game.city ? (
				<Subtitle>
					{game.city.name}
				</Subtitle>
			) : <Loader />}

			<Row className="w-full items-center justify-between gap-16">
				<p className="text-lg font-light w-1/2">Score</p>
				<p className="text-lg font-semibold">{game.score}</p>
			</Row>

			<Row className="w-full items-center justify-between gap-16">
				<p className="text-lg font-light w-1/2">Progression</p>
				<p className="text-lg font-semibold">{game.round} / {game.maxRound}</p>
			</Row>

			<Row className="w-full items-center justify-between gap-16">
				<p className="text-lg font-light w-1/2">Niveau</p>
				<Row className="max-sm:w-full items-center gap-2">
					<Image
						className="size-8" draggable="false"
						src={`/levels/${game.level}.png`} alt={`Level ${game.level}`}
						width={200} height={200}
					/>
					<p className="text-lg font-semibold">
						{getLevelById(game.level).name}
					</p>
				</Row>
			</Row>

			<Row className="w-full items-center justify-end gap-4">
				{game.status === "pointing" ? (
					<GameButton onClick={onValid}>Valider</GameButton>
				) : (
					<GameButton onClick={onNext} disabled={game.status === "finished"}>Suivant</GameButton>
				)}
			</Row>
		</Column>
	)
}