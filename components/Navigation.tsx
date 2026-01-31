'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const instagramUrl = 'https://www.instagram.com/flsociety/?hl=en'

  const navLinks = [
    { href: '/', label: 'home' },
    { href: '/show-archive', label: 'show' },
    { href: '/volta', label: 'volta' },
    { href: '/meet-the-team', label: 'team' },
    { href: '/behind-the-scenes', label: 'bts' },
  ]

  // Close on route change (mobile)
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Focus trap when menu open: focus first focusable inside menu
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return
    const focusable = menuRef.current.querySelector<HTMLElement>(
      'a[href], button:not([disabled])'
    )
    focusable?.focus()
  }, [menuOpen])

  return (
    <nav className="bg-black py-4">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[44px]">
          {/* Logo */}
          <div className="flex justify-start items-baseline leading-none">
            <Link
              href="/"
              className="text-white text-2xl sm:text-3xl font-didot leading-none"
            >
              F&LS
            </Link>
          </div>

          {/* Desktop: horizontal nav (no fixed width) */}
          <div className="hidden lg:flex lg:items-center lg:gap-6 lg:flex-1 lg:justify-end lg:max-w-[600px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-400 text-lg font-helveticaLight font-light leading-none min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center shrink-0"
            >
              <img
                src="/images/instagram.svg"
                alt=""
                width={24}
                height={24}
                className="block h-6 w-6 hover:opacity-70"
              />
            </a>
          </div>

          {/* Mobile: hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`lg:hidden fixed inset-0 z-50 bg-black transition-opacity duration-200 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '57px' }}
      >
        <div className="flex flex-col items-stretch px-6 py-8 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gray-400 text-xl font-helveticaLight font-light py-3 min-h-[44px] flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-12 w-12 items-center justify-center mt-4"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/instagram.svg"
              alt=""
              width={24}
              height={24}
              className="block h-6 w-6 hover:opacity-70"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
