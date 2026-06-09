import { ReactNode } from 'react'
import { FileX, Inbox, Search } from 'lucide-react'

interface EmptyStateProps {
  icon?: 'file' | 'inbox' | 'search'
  title: string
  description?: string
  action?: ReactNode
}

const icons = {
  file: FileX,
  inbox: Inbox,
  search: Search,
}

export function EmptyState({ icon = 'inbox', title, description, action }: EmptyStateProps) {
  const Icon = icons[icon]

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--bg-tertiary)' }}
      >
        <Icon className="w-8 h-8" style={{ color: 'var(--text-tertiary)' }} />
      </div>
      <h3 className="heading-3 mb-2">{title}</h3>
      {description && (
        <p className="text-muted max-w-md mb-6">{description}</p>
      )}
      {action}
    </div>
  )
}
