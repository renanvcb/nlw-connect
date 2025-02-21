import type { ReactNode } from 'react'

interface InviteCardProps {
  dataText: string
  title: string
  icon?: ReactNode
}

export function InviteCard({ dataText, title, icon }: InviteCardProps) {
  return (
    <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
      <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
        {dataText}
      </span>
      <span className="text-sm text-gray-300 leading-none text-center">
        {title}
      </span>

      <span className="text-purple absolute top-3 left-3">{icon}</span>
    </div>
  )
}
