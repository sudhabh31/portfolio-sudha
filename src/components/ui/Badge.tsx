import { memo } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'neutral' | 'accent'
  className?: string
}

export default memo(function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'rounded-full px-3 py-1 text-xs font-medium',
        variant === 'accent'
          ? 'bg-accent-light text-accent'
          : 'bg-bg text-text-secondary',
        className
      )}
    >
      {children}
    </span>
  )
})
