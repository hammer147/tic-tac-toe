import { BoardStatus } from '@/types'

type StatusProps = {
  boardStatus: BoardStatus
}

export default function Status({ boardStatus }: StatusProps) {
  return (
    <div>
      {boardStatus.type === 'winner'
        ? `Winner: ${boardStatus.player}`
        : boardStatus.type === 'draw'
        ? 'Draw'
        : `Next player: ${boardStatus.player}`}
    </div>
  )
}
