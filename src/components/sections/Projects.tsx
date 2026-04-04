import { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import ProjectDetailOverlay from '@/components/ui/ProjectDetailOverlay'
import TechStackVisual from '@/components/visuals/TechStackVisual'
import DenialAnalyticsVisual from '@/components/visuals/DenialAnalyticsVisual'
import ConversationalBIVisual from '@/components/visuals/ConversationalBIVisual'
import DataIntegrityVisual from '@/components/visuals/DataIntegrityVisual'
import { projects } from '@/data/projects'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)

  const activeProject = activeProjectId
    ? projects.find((p) => p.id === activeProjectId)
    : undefined

  const handleClose = useCallback(() => setActiveProjectId(null), [])

  return (
    <>
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            subtitle="A selection of my recent work."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all hover:shadow-elevated hover:border-accent/30 ${project.detail ? 'cursor-pointer' : ''}`}
                onClick={() => project.detail && setActiveProjectId(project.id)}
              >
                {/* Visual / Placeholder */}
                {project.visual === 'tech-stack' ? (
                  <div className="mb-5 transition-transform group-hover:scale-[1.02]">
                    <TechStackVisual compact />
                  </div>
                ) : project.visual === 'denial-analytics' ? (
                  <div className="mb-5 transition-transform group-hover:scale-[1.02]">
                    <DenialAnalyticsVisual compact />
                  </div>
                ) : project.visual === 'conversational-bi' ? (
                  <div className="mb-5 transition-transform group-hover:scale-[1.02]">
                    <ConversationalBIVisual compact />
                  </div>
                ) : project.visual === 'data-integrity' ? (
                  <div className="mb-5 transition-transform group-hover:scale-[1.02]">
                    <DataIntegrityVisual compact />
                  </div>
                ) : (
                  <div className="mb-5 flex h-52 items-center justify-center rounded-xl bg-bg transition-transform group-hover:scale-[1.02]">
                    <span className="text-sm text-text-tertiary">
                      Project Preview
                    </span>
                  </div>
                )}

                <h3 className="mb-2 text-xl font-bold text-text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                    >
                      Source <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal overlay outside section */}
      {createPortal(
        <AnimatePresence>
          {activeProject?.detail && (
            <ProjectDetailOverlay
              project={activeProject}
              onClose={handleClose}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
