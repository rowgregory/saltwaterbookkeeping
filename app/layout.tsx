import type { Metadata } from 'next'
import './globals.css'
import './fonts.css'
import './animations.css'
import PageWrapper from './page-wrapper'

export const metadata: Metadata = {
  metadataBase: new URL('https://saltwaterbookkeeping.com'),
  title: 'Saltwater Bookkeeping',
  description:
    'Saltwater Bookkeeping provides reliable and professional bookkeeping services for small businesses. Helping you navigate finances with accuracy and ease.',
  keywords: [
    'Saltwater Bookkeeping',
    'bookkeeping services',
    'small business bookkeeping',
    'financial services',
    'tax preparation',
    'accounting services',
    'bookkeeping for small business',
    'business financial management',
    'financial reporting',
    'payroll services',
    'tax filing',
    'quickbooks setup',
    'bookkeeping consultation',
    'small business accounting',
    'accountant services',
    'business tax solutions',
    'business accounting',
    'bookkeeping experts',
    'quickbooks experts',
    'financial strategy for small business',
    'budgeting for small business',
    'business tax planning',
    'affordable bookkeeping',
    'reliable bookkeeping services',
    'bookkeeping near me',
    'bookkeeping in [Location]',
    'tax advice',
    'bookkeeping consultation'
  ],
  openGraph: {
    title: 'Saltwater Bookkeeping',
    description:
      'Professional bookkeeping and financial services for small businesses. Your trusted partner in managing finances with precision.',
    url: 'https://saltwaterbookkeeping.com',
    siteName: 'Saltwater Bookkeeping',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fsaltwater.png?alt=media&token=416da90e-0e3a-4efe-8b69-7515c95f55d8',
        width: 1200,
        height: 630,
        alt: 'Saltwater Bookkeeping logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow'
  },
  applicationName: 'Saltwater Bookkeeping',
  appleWebApp: {
    title: 'Saltwater Bookkeeping',
    statusBarStyle: 'default',
    capable: true
  },
  alternates: {
    canonical: 'https://saltwaterbookkeeping.com'
  },
  other: {
    'apple-mobile-web-app-capable': 'yes', // Add this for legacy support
    'mobile-web-app-capable': 'yes' // This will explicitly cover modern cases
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}
