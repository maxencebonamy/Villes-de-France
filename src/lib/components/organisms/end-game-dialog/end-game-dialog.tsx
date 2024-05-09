import type { ReactElement } from "react"
import type { EndGameDialogProps } from "."
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from "@/lib/components/shadcnui/ui/alert-dialog"
import { Subtitle } from "@/lib/components/atoms/subtitle"
import { Text } from "@/lib/components/atoms/text"
import { GameButton } from "@/lib/components/molecules/game-button"
import Image from "next/image"
import { Row } from "@/lib/components/atoms/row"
import { Column } from "@/lib/components/atoms/column"
import { getLevelById } from "@/lib/utils/level"

export const EndGameDialog = ({ open, game }: EndGameDialogProps): ReactElement => {
	return (
		<AlertDialog open={open}>
			<AlertDialogContent className="max-sm:w-11/12 max-sm:rounded-lg">
				<AlertDialogHeader>
					<Subtitle className="text-center">
						Partie terminée !
					</Subtitle>
				</AlertDialogHeader>

				<Row className="gap-4 items-center">
					<Image
						className="size-24" draggable="false"
						src={`/levels/${game.level}.png`} alt={`Level ${game.level}`}
						width={200} height={200}
					/>

					<Column className="gap-2">
						<Text className="text-lg font-semibold">{`Score : ${game.score}`}</Text>
						<Text className="text-lg italic">{`Niveau ${getLevelById(game.level).name}`}</Text>
					</Column>
				</Row>

				<AlertDialogFooter className="flex-row justify-end">
					<GameButton link="/">
						Continuer
					</GameButton>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}