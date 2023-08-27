import { BoardValue } from '@/types'
import Square, { SquareProps } from './square'
import Column from './column'
import Row from './row'

type BoardProps = {
  boardValue: BoardValue
  onSquareClick: (square: number) => void
}

export default function Board({ boardValue, onSquareClick }: BoardProps) {
  const createSquareProps = (square: number): SquareProps => ({
    value: boardValue[square],
    onClick: () => onSquareClick(square)
  })

  return (
    <Column gap='gap-0'>
      <Row gap='gap-0'>
        <Square {...createSquareProps(0)} />
        <Square {...createSquareProps(1)} />
        <Square {...createSquareProps(2)} />
      </Row>
      <Row gap='gap-0'>
        <Square {...createSquareProps(3)} />
        <Square {...createSquareProps(4)} />
        <Square {...createSquareProps(5)} />
      </Row>
      <Row gap='gap-0'>
        <Square {...createSquareProps(6)} />
        <Square {...createSquareProps(7)} />
        <Square {...createSquareProps(8)} />
      </Row>
    </Column>
  )
}
