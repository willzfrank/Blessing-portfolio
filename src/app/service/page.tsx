export const metadata = {
  title: 'Services | Blessing Francis Portfolio',
  description:
    'Explore the services offered by Blessing Francis: UX/UI Design, Design Systems, Graphic Design, and Development.',
  openGraph: {
    title: 'Services | Blessing Francis Portfolio',
    description:
      'Explore the services offered by Blessing Francis: UX/UI Design, Design Systems, Graphic Design, and Development.',
    url: 'https://blessing-francis.vercel.app/service',
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
    title: 'Services | Blessing Francis Portfolio',
    description:
      'Explore the services offered by Blessing Francis: UX/UI Design, Design Systems, Graphic Design, and Development.',
    images: ['/favicon.ico'],
  },
}
;('use client')

import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'UX/UI Design',
    description:
      'Providing intuitive UX/UI design services that prioritize user experience, creative solutions, and engaging interfaces that drive interaction and satisfaction.',
    image: '/service-uxui.png',
  },
  {
    id: 2,
    title: 'Design System',
    description:
      'Building robust design systems for scalable, consistent, and efficient product development.',
    image: '/service-designsystem.png',
  },
  {
    id: 3,
    title: 'Graphic Design',
    description:
      'Crafting impactful graphic design solutions for branding, marketing, and communication.',
    image: '/service-graphic.png',
  },
  {
    id: 4,
    title: 'Development',
    description:
      'Full-stack development services for web and mobile applications, from concept to launch.',
    image: '/service-dev.png',
  },
]

export default function ServicePage() {
  const [open, setOpen] = useState(1)
  return (
    <main
      id="main-content"
      role="main"
      aria-label="Service content"
      className="max-w-4xl mx-auto py-16 px-4"
    >
      <h1 className="text-4xl font-bold mb-10">
        Unleashing Your Brand’s Potential
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        Unleashing Your Brand’s Potential by crafting innovative strategies,
        impactful designs, and tailored solutions that resonate with your
        audience and elevate your brand to new heights.
      </p>
      <div className="space-y-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: service.id * 0.1 }}
            className={`rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow p-4 ${
              open === service.id ? 'ring-2 ring-blue-400' : ''
            }`}
          >
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => setOpen(service.id)}
            >
              <span className="text-xl font-semibold">
                {service.id < 10 ? `0${service.id}` : service.id}.{' '}
                {service.title}
              </span>
              <span className="text-blue-500 font-bold">
                {open === service.id ? 'See Detail' : ''}
              </span>
            </button>
            {open === service.id && (
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-40 h-32 object-cover rounded-lg border border-gray-100 dark:border-gray-800"
                />
                <p className="text-gray-700 dark:text-gray-300 text-base flex-1">
                  {service.description}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </main>
  )
}
