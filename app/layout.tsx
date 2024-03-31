import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Linear Next.js Mockup',
  description: "A mockup of Linear's website using Next.js"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <Header />
      <main className="pt-[var(--navigation-height)]">{children}</main>
      <Footer />
    </html>
  )
}
