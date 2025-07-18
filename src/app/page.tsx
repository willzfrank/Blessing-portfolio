import Home from './components/Home'

export const metadata = {
  title: 'Home | Blessing Francis Portfolio',
  description:
    'Welcome to the portfolio of Blessing Francis – creative professional in design and branding. Discover projects, services, and contact info.',
  openGraph: {
    title: 'Home | Blessing Francis Portfolio',
    description:
      'Welcome to the portfolio of Blessing Francis – creative professional in design and branding. Discover projects, services, and contact info.',
    url: 'https://blessing-francis.vercel.app',
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
    title: 'Home | Blessing Francis Portfolio',
    description:
      'Welcome to the portfolio of Blessing Francis – creative professional in design and branding. Discover projects, services, and contact info.',
    images: ['/favicon.ico'],
  },
}

export default function Page() {
  return <Home />
}
