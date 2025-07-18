'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/service', label: 'Service' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function ResponsiveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="w-full border-b border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 sm:px-10 pt-8 pb-4">
      <div className="flex items-center justify-between w-full">
        {/* Brand */}
        <span className="text-base font-serif font-bold text-black dark:text-white flex-shrink-0">
          Blessing Francis
        </span>
        {/* Desktop Nav */}
        <nav className="hidden sm:flex flex-1 justify-center gap-10 text-base font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Contact + ThemeToggle */}
        <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
          <span className="w-max text-base font-semibold text-black dark:text-white">
            +1 (555) 123-4567
          </span>
          <ThemeToggle />
        </div>
        {/* Hamburger */}
        <button
          className="sm:hidden p-2 ml-auto"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      <nav
        className={`flex-col flex w-full gap-4 text-base font-medium items-center justify-center transition-all duration-300 ${
          menuOpen ? 'flex' : 'hidden'
        } sm:hidden mt-4`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-center py-2"
          >
            {link.label}
          </Link>
        ))}
        <span className="text-base w-max font-semibold text-black dark:text-white block py-2">
          +1 (555) 123-4567
        </span>
        <ThemeToggle />
      </nav>
    </header>
  )
}
