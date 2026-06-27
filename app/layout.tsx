import type { Metadata } from "next"
import { JetBrains_Mono, Reenie_Beanie, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import Dot from "@/components/animata/background/dot"
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const geistMono = Geist_Mono({ subsets: ["latin"], weight: "400", variable: "--font-geist-mono" })
const reenieBeanie = Reenie_Beanie({ subsets: ["latin"], weight: "400", variable: "--font-handwritten" })
const historiaSky = localFont({
  src: "../public/fonts/HistoriaSky.ttf",
  variable: "--font-signature",
  weight: "400",
  style: "normal",
})
const ndot55 = localFont({
  src: "../public/fonts/Ndot55Caps-Regular.otf",
  variable: "--font-accent",
  weight: "400",
  style: "normal",
})

export const metadata: Metadata = {
  title: "Saurav G.C.",
  description: "I turn ideas into things you can click. CS student, AI/ML, Kathmandu, Nepal.",
  metadataBase: new URL("https://saurav.com.np"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
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
    <html lang="en" className={`${jetbrainsMono.variable} ${geistMono.variable} ${reenieBeanie.variable} ${historiaSky.variable} ${ndot55.variable}`}>
      <body>
        <link rel="preload" href="/images/vinyl.png" as="image" />
        <link rel="preload" href="/images/blonde.jpeg" as="image" />
        <ServiceWorkerRegister />
        <SmoothScrollProvider>
          <Dot color="rgba(0,0,0,0.12)" size={1.2} spacing={10} style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
            {children}
          </Dot>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}