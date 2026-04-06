import { createContext, useContext, useState, useCallback } from 'react'
import type { ReactNode } from 'react'
import ContactModal from '@/components/ui/ContactModal'

const ContactContext = createContext<() => void>(() => {})

export function useContactModal() {
  return useContext(ContactContext)
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <ContactContext.Provider value={open}>
      {children}
      <ContactModal isOpen={isOpen} onClose={close} />
    </ContactContext.Provider>
  )
}
