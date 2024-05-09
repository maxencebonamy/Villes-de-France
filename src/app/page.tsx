import { Column } from "@/lib/components/atoms/column"
import { Text } from "@/lib/components/atoms/text"
import { LevelSelector } from "@/lib/components/organisms/level-selector"
import type { ReactElement } from "react"

export default (): ReactElement => {
	return (
		<main className="min-h-full w-full flex flex-col items-center justify-center py-24 px-12 xl:px-64 overflow-y-scroll">
			<Column className="items-center">
				<Text className="text-3xl font-bold text-center mb-2">Trouve la ville de France !</Text>
				<Text className="text-center">
					Sélectionne le niveau de difficulté puis clique sur le bouton "Jouer" pour vérifier tes connaissances sur les villes de France.
				</Text>
				<LevelSelector className="mt-8" />
			</Column>
		</main>
	)
}