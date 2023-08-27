import { ReactNode } from 'react'

type RowProps = {
  gap: 'gap-0' | 'gap-20'
  children: ReactNode
}

export default function Row({ gap, children }: RowProps) {
  return <div className={`flex flex-row ${gap}`}>{children}</div>
}
