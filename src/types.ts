export type Player = 'X' | 'O'

export type SquareValue = Player | null

export type BoardValue = SquareValue[]

export type BoardStatus =
  | { type: 'winner'; player: Player }
  | { type: 'draw' }
  | { type: 'next'; player: Player }

export type BoardHistory = BoardValue[]

export type GameState = {
    boardHistory: BoardHistory
    step: number
}
