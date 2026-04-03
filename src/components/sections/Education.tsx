import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { education } from '@/data/education'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Background"
          title="Education & Certifications"
          subtitle="The foundation behind the expertise."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => {
            const isHovered = hoveredIndex === index
            const hasHover = hoveredIndex !== null
            const isCertification = item.period.length === 4

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isHovered ? 1.03 : hasHover ? 0.98 : 1,
                  opacity: isHovered ? 1 : hasHover ? 0.6 : 1,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="cursor-default rounded-2xl border border-border bg-surface p-8 transition-shadow"
                style={{
                  boxShadow: isHovered
                    ? 'var(--shadow-elevated)'
                    : 'var(--shadow-soft)',
                  borderColor: isHovered
                    ? 'var(--color-accent)'
                    : 'var(--color-border)',
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isHovered ? 'bg-accent text-white' : 'bg-bg text-text-secondary'
                    } transition-colors`}
                  >
                    {isCertification ? (
                      <Award size={20} />
                    ) : (
                      <GraduationCap size={20} />
                    )}
                  </div>
                  <span className="section-label">{item.period}</span>
                </div>

                <h3 className="mb-1 text-lg font-bold text-text-primary">
                  {item.degree}
                </h3>
                <p className="mb-3 text-sm font-medium text-accent">
                  {item.institution}
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
