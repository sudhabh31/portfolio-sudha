import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import MagneticButton from '@/components/ui/MagneticButton'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import { useContactModal } from '@/lib/ContactContext'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const openContact = useContactModal()

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-label', { y: 30, opacity: 0, duration: 0.8 })
      .from('.hero-title-line', { y: 60, opacity: 0, duration: 0.9, stagger: 0.15 }, '-=0.4')
      .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.7 }, '-=0.3')
      .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.3')
      .from('.hero-scroll-indicator', { y: -10, opacity: 0, duration: 0.6 }, '-=0.1')
      .from('.hero-portrait', { scale: 0.9, opacity: 0, duration: 1.2, ease: 'power2.out' }, '-=1.5')
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* Abstract wave background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top waves - muted peach, wide smooth curves */}
          <path
            d="M0,0 L1440,0 L1440,120 C1200,160 1000,60 720,100 C440,140 200,50 0,90 Z"
            fill="#FDDAC2"
            opacity="0.10"
          />
          <path
            d="M0,0 L1440,0 L1440,80 C1100,130 850,40 600,80 C350,120 150,30 0,60 Z"
            fill="#FDDAC2"
            opacity="0.07"
          />

          {/* Bottom waves - cool gray-blue, wide smooth curves */}
          <path
            d="M0,900 L1440,900 L1440,780 C1200,740 1000,820 720,790 C440,760 200,840 0,800 Z"
            fill="#94A3B8"
            opacity="0.07"
          />
          <path
            d="M0,900 L1440,900 L1440,830 C1100,790 850,860 600,830 C350,800 150,870 0,850 Z"
            fill="#64748B"
            opacity="0.05"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 pt-24 lg:flex-row lg:gap-20">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="hero-label section-label mb-6">
            Senior Data & BI Strategist | Analytics | AI | Automation
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-text-primary md:text-6xl lg:text-7xl">
            <span className="hero-title-line block">Turning</span>
            <span className="hero-title-line block">
              <span className="text-accent">Data</span> into
            </span>
            <span className="hero-title-line block">Decisions.</span>
          </h1>

          <p className="hero-subtitle mx-auto mb-10 max-w-lg text-lg leading-relaxed text-text-secondary lg:mx-0">
            10+ years of experience architecting full-stack analytics solutions
            — from raw data pipelines to customer-facing dashboards. I engineer
            high-performance solutions that eliminate manual bottlenecks and
            accelerate executive decision-making.
          </p>

          <div className="hero-cta flex flex-wrap justify-center gap-4 lg:justify-start">
            <MagneticButton
              onClick={openContact}
              className="bg-accent text-white hover:bg-accent-hover hover:shadow-accent"
            >
              Get in Touch <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="#projects"
              className="border border-border bg-surface text-text-primary hover:border-accent hover:text-accent"
            >
              View Work
            </MagneticButton>
          </div>
        </div>

        {/* Portrait / Visual */}
        <div className="hero-portrait relative flex-shrink-0">
          <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-border/50" />
            <div className="absolute inset-3 rounded-full border border-border/30" />

            {/* Portrait photo */}
            <img
              src="/portrait.webp"
              alt={siteConfig.name}
              width={450}
              height={450}
              decoding="async"
              className="absolute inset-6 h-[calc(100%-48px)] w-[calc(100%-48px)] rounded-full object-cover"
              style={{ filter: 'blur(1px)' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#gallery" className="flex flex-col items-center gap-2 text-text-tertiary transition-colors hover:text-accent">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
