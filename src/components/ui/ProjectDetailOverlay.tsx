import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { ProjectItem } from '@/types'
import Badge from '@/components/ui/Badge'
import TechStackVisual from '@/components/visuals/TechStackVisual'
import DenialAnalyticsVisual from '@/components/visuals/DenialAnalyticsVisual'

interface ProjectDetailOverlayProps {
  project: ProjectItem
  onClose: () => void
}

function ProjectVisual({ visual }: { visual?: string }) {
  switch (visual) {
    case 'tech-stack':
      return <TechStackVisual />
    case 'denial-analytics':
      return <DenialAnalyticsVisual />
    default:
      return null
  }
}

export default function ProjectDetailOverlay({ project, onClose }: ProjectDetailOverlayProps) {
  // ESC key handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (!project.detail) return null

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />

      {/* Content panel */}
      <motion.div
        className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-surface shadow-elevated"
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-bg text-text-secondary transition-colors hover:bg-border hover:text-text-primary"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Visual */}
          <div className="p-6 pb-0">
            <ProjectVisual visual={project.visual} />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Headline */}
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
              {project.detail.headline}
            </h2>

            {/* Tech badges */}
            <div className="mb-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            {/* Sections */}
            <div className="space-y-6">
              {project.detail.sections.map((section, i) => (
                <div key={i}>
                  <h3 className="mb-2 text-lg font-bold text-text-primary">
                    {section.title}
                  </h3>
                  {section.content && (
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {section.content}
                    </p>
                  )}
                  {section.bullets && (
                    <ul className="mt-2 space-y-3">
                      {section.bullets.map((bullet, j) => {
                        const dashIndex = bullet.indexOf('—')
                        const hasLabel = dashIndex > 0 && dashIndex < 40

                        return (
                          <li key={j} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            <span>
                              {hasLabel ? (
                                <>
                                  <strong className="text-text-primary">
                                    {bullet.slice(0, dashIndex).trim()}
                                  </strong>
                                  {' — '}
                                  {bullet.slice(dashIndex + 1).trim()}
                                </>
                              ) : (
                                bullet
                              )}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
