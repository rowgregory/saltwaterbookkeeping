import type { Metadata } from 'next'
import './globals.css'
import './fonts.css'
import './animations.css'
import PageWrapper from './page-wrapper'

export const metadata: Metadata = {
  title: 'Saltwater Bookkeeing',
  description:
    'Professional bookkeeping services that provide accurate financial record-keeping, tax preparation, and financial analysis, helping businesses stay on track and grow.'
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
