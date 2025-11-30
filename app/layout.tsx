import type React from "react"
import type { Metadata, Viewport } from "next" // Import Viewport type
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Font definitions remain the same, though you may not use all of them
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], weight: "700" })
const _crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600"] })

// --- FIX APPLIED HERE ---
// 1. Export the viewport configuration separately.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // themeColor is now correctly placed inside the Viewport object/export
  themeColor: "#d4a5a0", 
}
// ------------------------

export const metadata: Metadata = {
  title: "GlowUp - Your Personalized Beauty Advisor",
  description:
    "Discover your glow with AI-powered beauty recommendations, skin analysis, and virtual try-on technology.",
  generator: "v0.app",
  // 2. The 'viewport' property is REMOVED from the Metadata object
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}