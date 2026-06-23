import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Caveat, Marck_Script } from "next/font/google"
import Dot from "@/components/animata/background/dot"
import "./globals.css"

const caveat = Caveat({ subsets: ["latin"], variable: "--font-handwritten" })
const marckScript = Marck_Script({ subsets: ["latin", "cyrillic"], weight: "400", variable: "--font-signature" })

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
    <html lang="en" className={`${GeistMono.variable} ${caveat.variable} ${marckScript.variable}`}>
      <body>
        <Dot color="rgba(0,0,0,0.12)" size={1.2} spacing={10} style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
          {children}
        </Dot>
      </body>
    </html>
  )
}