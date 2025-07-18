'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'A modern, animated portfolio website built with Next.js and Tailwind CSS.',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'E-commerce Store',
    description:
      'A full-featured e-commerce platform with shopping cart and payment integration.',
    link: 'https://your-ecommerce-link.com',
  },
  {
    title: 'Blog Platform',
    description:
      'A fast, SEO-friendly blog platform with markdown support and comments.',
    link: 'https://your-blog-link.com',
  },
]

export default function Projects() {
  return (
    <main
      id="main-content"
      role="main"
      aria-label="Projects content"
      className="max-w-4xl mx-auto py-16 px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
      >
        My Projects
      </motion.h1>
      <div className="grid gap-10 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.2, duration: 0.7 }}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 8px 32px rgba(80,0,200,0.15)',
            }}
            className="block rounded-2xl bg-white/80 dark:bg-black/60 p-8 shadow-xl border border-gray-200 dark:border-gray-800 transition-all hover:border-blue-500 hover:shadow-2xl animate-fade-in"
          >
            <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">
              {project.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors">
              Visit Project
            </span>
          </motion.a>
        ))}
      </div>
    </main>
  )
}
