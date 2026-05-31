export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <p style={{ fontFamily: "var(--font-accent)", fontSize: "48px" }}>
        SAURAV
      </p>
      <p style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 800 }}>
        Cabinet Grotesk 800
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "20px", fontWeight: 300 }}>
        Satoshi Light 300
      </p>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "16px" }}>
        Geist Mono Regular
      </p>
    </main>
  )
}