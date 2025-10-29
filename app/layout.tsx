import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import ButtonDownload from '@/components/button-download';

export const metadata: Metadata = {
  title: "Smart Home Dashboard",
  description: "This is a modern, customizable smart home dashboard built with Next.js, React, and Tailwind CSS. It provides a beautiful interface to monitor and control smart home devices, view statistics, manage user profiles, and more.",
  generator: "Smart Home Dashboard",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      // Put font variables and antialiasing on html so they apply before hydration.
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      // Ensure a default brand so color theming is active before hydration.
      data-brand="purple"
    >
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            {children}
            <ButtonDownload />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
