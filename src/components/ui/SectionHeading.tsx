import { memo } from 'react'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
}

export default memo(function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <p className="section-label mb-3">{label}</p>
      <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  )
})
