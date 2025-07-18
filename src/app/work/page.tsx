'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    name: 'COINAC',
    year: 2020,
    description: 'Coinac is a budding cryptocurrency trading app that offers a smooth, secure, modern platform for buying, selling, and storing cryptocurrency.',
    image: '/work-coinac.png',
  },
  {
    name: 'COPLO',
    year: 2021,
    description: 'We are dedicated to bringing the world of music to your fingertips. Our mission is to connect musicians, producers, and fans, globally.',
    image: '/work-coplo.png',
  },
  {
    name: 'HECTORY',
    year: 2022,
    description: 'Our brand sincerely embodies a seamless fusion of sophistication, modernity, and authenticity, catering to the discerning needs of the contemporary year.',
    image: '/work-hectory.png',
  },
  {
    name: 'VITYK',
    year: 2024,
    description: 'Vityk is the best, most fun, and most educational way to learn about guitar grids, song writing, chords, and scales. It is backed and proven via both beginners and advanced guitar players.',
    image: '/work-vityk.png',
  },
];

export default function WorkPage() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-10">Showcasing My Most Recent Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-4 flex flex-col"
          >
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4 border border-gray-100 dark:border-gray-800" />
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-black dark:text-white">{project.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base flex-1">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
} 