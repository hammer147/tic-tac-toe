import { SquareValue } from '@/types'

export type SquareProps = {
  value: SquareValue
  onClick: () => void
}

export default function Square({ value, onClick }: SquareProps) {
  return (
    <div
      className='w-9 h-9 bg-gray-600 flex justify-center items-center text-2xl font-bold border border-gray-300 '
      onClick={onClick}
    >
      {value}
    </div>
  )
}
