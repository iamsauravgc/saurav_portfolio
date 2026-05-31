import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Saurav G.C. — CS & AI/ML Engineer",
  description: "I turn ideas into things you can click. CS student, AI/ML, Kathmandu, Nepal.",
  metadataBase: new URL("https://saurav.com.np"),
  openGraph: {
    title: "Saurav G.C.",
    description: "I turn ideas into things you can click.",
    url: "https://saurav.com.np",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.variable}>
      <body>{children}</body>
    </html>
  )
}