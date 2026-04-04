import { useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import ProjectDetailOverlay from '@/components/ui/ProjectDetailOverlay'
import TechStackVisual from '@/components/visuals/TechStackVisual'
import DenialAnalyticsVisual from '@/components/visuals/DenialAnalyticsVisual'
import { projects } from '@/data/projects'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)

  const activeProject = activeProjectId
    ? projects.find((p) => p.id === activeProjectId)
    : undefined

  const handleClose = useCallback(() => setActiveProjectId(null), [])

  useGSAP(() => {
    if (!trackRef.current || !containerRef.current) return

    const track = trackRef.current
    const scrollWidth = track.scrollWidth - window.innerWidth

    gsap.to(track, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })
  }, { scope: containerRef })

  return (
    <>
    <section id="projects" ref={containerRef} className="overflow-hidden">
      <div className="flex h-screen flex-col justify-center">
        <div className="px-6 mb-8">
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            subtitle="Scroll to explore a selection of my recent work."
          />
        </div>

        <div ref={trackRef} className="flex gap-8 px-6 will-change-transform">
          {/* Spacer for initial padding */}
          <div className="flex-shrink-0 w-[calc((100vw-1280px)/2)]" />

          {projects.map((project) => (
            <div
              key={project.id}
              className={`group flex-shrink-0 w-[420px] rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all hover:shadow-elevated hover:border-accent/30 ${project.detail ? 'cursor-pointer' : ''}`}
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
            </div>
          ))}

          {/* Spacer for end padding */}
          <div className="flex-shrink-0 w-[100px]" />
        </div>
      </div>
    </section>
    {/* Portal overlay outside GSAP pin stacking context */}
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
