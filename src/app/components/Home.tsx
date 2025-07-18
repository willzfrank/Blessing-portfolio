'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import React from 'react'

const social = [
  { icon: 'streamline-logos:x-twitter-logo', href: '#', title: 'X (Twitter)' },
  { icon: 'uit:linkedin-alt', href: '#', title: 'LinkedIn' },
  { icon: 'icon-park-outline:dribble', href: '#', title: 'Dribbble' },
]

export default function Home() {
  const [typed, setTyped] = useState('')
  const first = 'Blessing'
  const second = '-Francis'
  const [showFirst, setShowFirst] = useState(false)
  useEffect(() => {
    let j = 0
    setTyped('')
    setShowFirst(false)
    const show = setTimeout(() => {
      setShowFirst(true)
      setTimeout(() => {
        const interval = setInterval(() => {
          setTyped(second.slice(0, j + 1))
          j++
          if (j === second.length) clearInterval(interval)
        }, 120)
      }, 400)
    }, 200)
    return () => clearTimeout(show)
  }, [])

  return (
    <main
      id="main-content"
      role="main"
      aria-label="Main content"
      className="flex flex-col items-center min-h-[70vh] w-full bg-gray-50 dark:bg-neutral-900 pt-12"
    >
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-10 pb-12 border-b border-black/10 dark:border-white/10">
        {/* Left: Brand, Name, Contact, Social */}
        <div className="flex-1 flex flex-col gap-6 justify-center min-w-[320px]">
          {showFirst && (
            <span className="text-2xl font-medium text-neutral-700 dark:text-neutral-300">
              {first}
            </span>
          )}
          <h1 className="text-[100px] font-serif font-bold text-black dark:text-white leading-none -mt-4 mb-2">
            {typed}
            <span className="inline-block w-4 animate-blink align-bottom">
              |
            </span>
          </h1>
          <div className="flex flex-col gap-1 mb-2">
            <span className="text-base text-neutral-700 dark:text-neutral-300 border-b border-gray-300 dark:border-gray-700 pb-1 w-fit">
              hello@blessingfrancis.com
            </span>
            <span className="text-base text-neutral-700 dark:text-neutral-300">
              +1 (555) 123-4567
            </span>
          </div>
          <div className="flex gap-2 mb-2">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors p-2 w-11 h-11"
                title={s.title}
                aria-label={s.title + ' profile'}
              >
                <Icon
                  icon={s.icon}
                  className="text-neutral-700 dark:text-neutral-300 w-5 h-5"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
        {/* Right: Description, Discover button, Decorative */}
        <div className="flex-1 flex flex-col justify-center gap-6 relative min-w-[320px]">
          <div className="hidden absolute right-0 top-0 md:flex gap-2 text-2xl text-neutral-400 dark:text-neutral-600">
            <Icon
              icon="emojione-monotone:sparkles"
              className="text-neutral-400 dark:text-neutral-200 w-5 h-5"
            />
            <Icon
              icon="emojione-monotone:sparkles"
              className="text-neutral-400 dark:text-neutral-200 w-5 h-5"
            />
          </div>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-md mb-4">
            Blessing Francis is a creative professional specializing in
            innovative design and branding. With a keen eye for detail and a
            passion for storytelling, Blessing helps clients bring their visions
            to life through impactful visual solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors w-fit"
          >
            Discover
          </motion.button>
        </div>
      </section>
    </main>
  )
}
