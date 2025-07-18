import type { Metadata } from 'next'
import './globals.css'
import ClientTransition from './ClientTransition'
import ResponsiveNavbar from './ResponsiveNavbar'

export const metadata: Metadata = {
  title: 'Blessing Francis Portfolio',
  description:
    'Portfolio of Blessing Francis – creative professional specializing in innovative design and branding. View projects, services, and contact info.',
  openGraph: {
    title: 'Blessing Francis Portfolio',
    description:
      'Portfolio of Blessing Francis – creative professional specializing in innovative design and branding. View projects, services, and contact info.',
    url: 'https://blessing-francis.vercel.app',
    siteName: 'Blessing Francis Portfolio',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Blessing Francis Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blessing Francis Portfolio',
    description:
      'Portfolio of Blessing Francis – creative professional specializing in innovative design and branding. View projects, services, and contact info.',
    images: ['/favicon.ico'],
    creator: '@yourtwitter',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://blessing-francis.vercel.app" />
      </head>
      <body className="bg-gray-50 dark:bg-neutral-900 text-black dark:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 bg-blue-600 text-white px-4 py-2 rounded shadow transition-all"
        >
          Skip to main content
        </a>
        <ResponsiveNavbar />
        <ClientTransition>{children}</ClientTransition>
      </body>
    </html>
  )
}
