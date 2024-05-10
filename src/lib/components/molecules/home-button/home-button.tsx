import type { ReactElement } from "react"
import type { HomeButtonProps } from "."
import Link from "next/link"
import { Button } from "@/lib/components/shadcnui/ui/button"
import { ChevronLeft } from "lucide-react"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from "@/lib/components/shadcnui/ui/alert-dialog"

export const HomeButton = ({ className }: HomeButtonProps): ReactElement => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline" size="icon" className={className ?? ""}>
					<ChevronLeft />
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className="max-sm:w-11/12 max-sm:rounded-lg">
				<AlertDialogHeader>
					<AlertDialogTitle>Revenir à l'accueil</AlertDialogTitle>
					<AlertDialogDescription>
						Êtes-vous sûr de vouloir quitter cette page ?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="gap-2 flex-row justify-end items-end">
					<AlertDialogCancel className="w-fit">Annuler</AlertDialogCancel>
					<Link href="/">
						<AlertDialogAction>Quitter</AlertDialogAction>
					</Link>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}