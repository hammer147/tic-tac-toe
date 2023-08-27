'use client'

import Board from './components/board'
import Column from './components/column'
import Log from './components/log'
import Row from './components/row'
import Status from './components/status'
import { useGameState } from './state/game-state'

export default function Home() {
  const {
    boardValue,
    boardHistory,
    boardStatus,
    handleSquareClick,
    handleStepClick
  } = useGameState()

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='p-5 border rounded-md'>
        <Row gap='gap-20'>
          <Column gap='gap-20'>
            <Status boardStatus={boardStatus} />
            <Board boardValue={boardValue} onSquareClick={handleSquareClick} />
          </Column>
          <Log boardHistory={boardHistory} onStepClick={handleStepClick} />
        </Row>
      </div>
    </main>
  )
}
