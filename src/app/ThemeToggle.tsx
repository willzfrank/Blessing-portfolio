'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  // On mount, set theme from localStorage or system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored === 'light' || stored === 'dark') {
        setTheme(stored)
        document.documentElement.classList.toggle('dark', stored === 'dark')
      } else {
        const prefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches
        setTheme(prefersDark ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', prefersDark)
      }
    }
  }, [])

  // Update html class and localStorage when theme changes
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  if (!theme) return null

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1.5m0 15V21m8.485-8.485h-1.5m-15 0H3m15.364-6.364l-1.06 1.06m-10.607 10.607l-1.06 1.06m12.727 0l-1.06-1.06m-10.607-10.607l-1.06-1.06M12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.136 2.664-7.64 6.41-9.165a.75.75 0 0 1 .908.325.75.75 0 0 1-.026.789A7.501 7.501 0 0 0 12 19.5a7.48 7.48 0 0 0 6.102-3.042.75.75 0 0 1 .788-.263.75.75 0 0 1 .325.807z"
          />
        </svg>
      )}
    </button>
  )
}
