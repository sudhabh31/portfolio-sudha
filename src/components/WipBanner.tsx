import { memo } from 'react'
import { Construction } from 'lucide-react'

export default memo(function WipBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-text-primary via-slate-800 to-text-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5">
        <Construction size={16} className="flex-shrink-0 text-accent" />
        <p className="text-center text-sm font-medium text-white/90">
          Pardon our dust — this site is a work in progress. Exciting things coming soon!
        </p>
        <Construction size={16} className="flex-shrink-0 text-accent" />
      </div>
    </div>
  )
})
