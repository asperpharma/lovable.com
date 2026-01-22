import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asper Beauty Shop - Premium Beauty Products',
  description: 'Discover premium beauty products at Asper Beauty Shop. Shop the latest beauty essentials and skincare products.',
  metadataBase: new URL('https://www.asperbeautyshop.com'),
  openGraph: {
    title: 'Asper Beauty Shop - Premium Beauty Products',
    description: 'Discover premium beauty products at Asper Beauty Shop',
    url: 'https://www.asperbeautyshop.com',
    siteName: 'Asper Beauty Shop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asper Beauty Shop - Premium Beauty Products',
    description: 'Discover premium beauty products at Asper Beauty Shop',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
