import type { GameState } from "@/lib/utils/game"

export type GamePanelProps = {
	game: GameState
	onValid: () => void
	onNext: () => void
}