import { Link, useLocation } from 'react-router-dom'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { navItems, siteConfig } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const scrollY = useScrollPosition()
  const location = useLocation()
  const isScrolled = scrollY > 80
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-10 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={cn(
          'mx-auto flex items-center justify-between px-6 py-3 transition-all duration-300',
          isScrolled
            ? 'glass-strong mt-4 max-w-4xl rounded-full'
            : 'max-w-7xl bg-transparent'
        )}
      >
        <Link
          to="/"
          className="flex items-center gap-2 no-underline"
        >
          <img src="/logo.svg" alt="Logo" className="h-6 w-6" />
          <span className="text-lg font-bold text-text-primary">{siteConfig.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.href.startsWith('/') ? (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors no-underline',
                  location.pathname === item.href
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-text-secondary transition-colors no-underline hover:text-text-primary"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="text-text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass-strong mx-4 mt-2 rounded-2xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-text-secondary no-underline hover:text-text-primary"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-base font-medium text-text-secondary no-underline hover:text-text-primary"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  )
}
