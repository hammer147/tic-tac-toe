import { ReactNode } from 'react'

type ColumnProps = {
  gap: 'gap-0' | 'gap-20'
  children: ReactNode
}

export default function Column({ gap, children }: ColumnProps) {
  return <div className={`flex flex-col ${gap}`}>{children}</div>
}
