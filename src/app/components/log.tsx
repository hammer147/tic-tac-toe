import { BoardHistory } from '@/types'

type LogProps = {
  boardHistory: BoardHistory
  onStepClick: (step: number) => void
}

export default function Log({ boardHistory, onStepClick }: LogProps) {
  return (
    <ol>
      {boardHistory.map((_, index) => (
        <li key={index}>
          <button onClick={() => onStepClick(index)}>
            Go to {index === 0 ? 'game start' : `move #${index}`}
          </button>
        </li>
      ))}
    </ol>
  )
}
