import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Copy, Check, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/lib/constants'

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface p-8 shadow-xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-text-tertiary transition-colors hover:bg-bg hover:text-text-primary"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="mb-3 h-1 w-12 rounded-full bg-accent" />
              <h3 className="text-2xl font-bold text-text-primary">Get in Touch</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Always open to connecting on new opportunities and ideas.
              </p>
            </div>

            {/* Email */}
            <div className="mb-4 rounded-xl border border-border bg-bg p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                <Mail size={14} />
                Email
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-medium text-text-primary transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
                <button
                  onClick={handleCopy}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-border text-text-secondary transition-all hover:border-accent hover:text-accent"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border bg-bg p-4 transition-all hover:border-accent"
            >
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                  <LinkedinIcon size={14} />
                  LinkedIn
                </div>
                <span className="text-sm font-medium text-text-primary">
                  linkedin.com/in/sudhabh31
                </span>
              </div>
              <ExternalLink size={16} className="flex-shrink-0 text-text-tertiary" />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
