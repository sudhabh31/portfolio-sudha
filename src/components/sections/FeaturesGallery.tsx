import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { galleryItems } from '@/data/gallery'
import BIDashboardVisual from '@/components/visuals/BIDashboardVisual'
import DataPipelineVisual from '@/components/visuals/DataPipelineVisual'
import AIAutomationVisual from '@/components/visuals/AIAutomationVisual'
import HealthcareAnalyticsVisual from '@/components/visuals/HealthcareAnalyticsVisual'
import ArchitectureVisual from '@/components/visuals/ArchitectureVisual'
import LeadershipVisual from '@/components/visuals/LeadershipVisual'

export default function FeaturesGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="What I Do"
          title="Areas of Expertise"
          subtitle="Full-stack analytics from raw data ingestion pipelines to high-fidelity BI and executive dashboards."
        />

        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16">
          {/* Card stack */}
          <div
            className="relative h-[340px] w-full max-w-lg flex-shrink-0 lg:h-[520px]"
          >
            <AnimatePresence mode="popLayout">
              {galleryItems.map((item, index) => {
                const offset = (index - activeIndex + galleryItems.length) % galleryItems.length

                if (offset > 3) return null

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{
                      opacity: offset === 0 ? 1 : 1 - offset * 0.15,
                      scale: 1 - offset * 0.05,
                      y: offset * -12,
                      zIndex: galleryItems.length - offset,
                      rotateZ: 0,
                    }}
                    exit={{ opacity: 0, x: -300, rotateZ: -8, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute inset-0 cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-medium lg:p-8"
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Colored accent bar */}
                    <div className="mb-4 h-1 w-16 rounded-full bg-accent" />

                    <span className="section-label mb-2 block">{item.category}</span>
                    <h3 className="mb-2 text-xl font-bold text-text-primary lg:mb-3 lg:text-2xl">
                      {item.title}
                    </h3>
                    {item.bullets ? (
                      <ul className="mt-1 space-y-2">
                        {item.bullets.map((b) => (
                          <li key={b.label} className="flex gap-2.5 text-sm leading-relaxed text-text-secondary">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            <span>
                              <strong className="text-text-primary">{b.label}</strong>
                              {' — '}
                              {b.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {/* Visual area — hidden on mobile */}
                    <div className="hidden lg:block">
                      {item.id === 'gal-1' ? (
                        <BIDashboardVisual />
                      ) : item.id === 'gal-2' ? (
                        <DataPipelineVisual />
                      ) : item.id === 'gal-3' ? (
                        <AIAutomationVisual />
                      ) : item.id === 'gal-4' ? (
                        <HealthcareAnalyticsVisual />
                      ) : item.id === 'gal-5' ? (
                        <ArchitectureVisual />
                      ) : item.id === 'gal-6' ? (
                        <LeadershipVisual />
                      ) : null}
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation dots + info */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <div className="flex gap-3 lg:mb-8">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-accent'
                      : 'w-2.5 bg-border-strong hover:bg-text-tertiary'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="hidden space-y-4 lg:block">
              {galleryItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`block w-full rounded-xl px-5 py-4 text-left transition-all duration-300 ${
                    index === activeIndex
                      ? 'border border-accent/20 bg-accent-light shadow-soft'
                      : 'hover:bg-surface'
                  }`}
                >
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      index === activeIndex ? 'text-accent' : 'text-text-secondary'
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
