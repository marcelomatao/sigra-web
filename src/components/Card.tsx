import { ReactNode } from 'react'

type CardVariant = 'interactive' | 'flat'

interface CardProps {
  children: ReactNode
  variant?: CardVariant
  className?: string
  onClick?: () => void
}

export function Card({ children, variant = 'interactive', className = '', onClick }: CardProps) {
  const baseClass = variant === 'interactive' ? 'card' : 'card-flat'
  
  return (
    <div
      className={`${baseClass} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  )
}
