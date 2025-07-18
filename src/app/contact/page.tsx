export const metadata = {
  title: 'Contact | Blessing Francis Portfolio',
  description:
    'Contact Blessing Francis for design, branding, and development inquiries. Get in touch today!',
  openGraph: {
    title: 'Contact | Blessing Francis Portfolio',
    description:
      'Contact Blessing Francis for design, branding, and development inquiries. Get in touch today!',
    url: 'https://blessing-francis.vercel.app/contact',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Blessing Francis Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Blessing Francis Portfolio',
    description:
      'Contact Blessing Francis for design, branding, and development inquiries. Get in touch today!',
    images: ['/favicon.ico'],
  },
}
;('use client')

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  // For demonstration, form submission is handled locally
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main
      id="main-content"
      role="main"
      aria-label="Contact content"
      className="max-w-xl mx-auto py-16 px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
      >
        Contact Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="bg-white/80 dark:bg-black/60 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800 animate-fade-in"
      >
        {submitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-lg text-green-600 dark:text-green-400 font-semibold"
          >
            Thank you for reaching out! I'll get back to you soon.
          </motion.p>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/40 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-all"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/40 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-all"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/40 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-all"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors text-lg animate-bounce"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </main>
  )
}
