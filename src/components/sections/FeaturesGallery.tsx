import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { galleryItems } from '@/data/gallery'
import LeadershipVisual from '@/components/visuals/LeadershipVisual'

export default function FeaturesGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length)
  }, [])

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(advance, 8000)
    return () => clearInterval(interval)
  }, [isHovered, advance])

  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="What I Do"
          title="Areas of Expertise"
          subtitle="From data pipelines to executive dashboards, AI automation to team leadership."
        />

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Card stack */}
          <div
            className="relative h-[400px] w-full max-w-lg flex-shrink-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
                    className="absolute inset-0 cursor-pointer rounded-2xl border border-border bg-surface p-8 shadow-medium"
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Colored accent bar */}
                    <div className="mb-6 h-1 w-16 rounded-full bg-accent" />

                    <span className="section-label mb-2 block">{item.category}</span>
                    <h3 className="mb-3 text-2xl font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>

                    {/* Visual area */}
                    {item.id === 'gal-5' ? (
                      <LeadershipVisual />
                    ) : (
                      <div className="mt-6 flex h-40 items-center justify-center rounded-xl bg-bg">
                        <span className="text-sm text-text-tertiary">
                          {item.category} Visual
                        </span>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation dots + info */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <div className="flex gap-3 mb-8">
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

            <div className="space-y-4">
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
