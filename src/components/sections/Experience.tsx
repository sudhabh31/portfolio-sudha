import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import { experiences } from '@/data/experience'

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item) => {
      gsap.from(item, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    })
  }, { scope: containerRef })

  return (
    <section id="experience" className="px-6 py-24" ref={containerRef}>
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Career Path"
          title="Experience"
          subtitle="10+ years of pipeline-to-dashboard delivery across healthcare, digital health, and enterprise analytics."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={exp.id}
                className="timeline-item relative mb-12 last:mb-0"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <div className="h-4 w-4 rounded-full border-2 border-accent bg-surface" />
                </div>

                {/* Content card */}
                <div
                  className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all hover:shadow-medium">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="section-label">{exp.period}</span>
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-accent">
                      {exp.company}
                    </p>
                    <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
