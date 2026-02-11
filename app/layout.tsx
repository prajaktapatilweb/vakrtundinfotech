import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'TechNova Solutions | IT Rentals, Hardware & Networking Services Since 2022',
  description:
    'Premium IT solutions provider offering laptop & desktop rentals, hardware accessories, networking infrastructure, CCTV installations, software configuration, and refurbished device sales across Pune, Chennai, Bangalore, Noida & more.',
  keywords:
    'laptop rental, desktop rental, projector rental, CCTV installation, networking, IT services, Pune, Kharadi, Hinjwadi, Baner, refurbished laptops',
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
