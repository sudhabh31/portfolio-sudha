import { Link } from 'react-router-dom'
import { siteConfig, navItems } from '@/lib/constants'
import { ArrowUpRight, Mail } from 'lucide-react'

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const socialLinks = [
  { icon: LinkedinIcon, href: siteConfig.links.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 pt-20 pb-10">
      <div className="mx-auto max-w-7xl">
        {/* CTA */}
        <div className="mb-16 text-center">
          <p className="section-label mb-4">Get in touch</p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-text-primary md:text-6xl lg:text-7xl">
            Let's turn data into
            <br />
            <span className="text-accent">decisions.</span>
          </h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-accent"
          >
            Say Hello <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-border pt-10 md:flex-row">
          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) =>
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-text-secondary no-underline transition-colors hover:text-text-primary"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-text-secondary no-underline transition-colors hover:text-text-primary"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? undefined : '_blank'}
                rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-accent hover:text-accent hover:shadow-soft"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
