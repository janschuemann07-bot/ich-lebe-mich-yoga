import './globals.css'

export const metadata = {
  title: 'ich lebe mich | Yoga Studio Leipzig - Bianka Schümann',
  description: 'Bianka Schümann Yoga Studio Leipzig (Leutzsch). Yoga für Anfänger, Hatha Yoga, Vinyasa Flow und therapeutisches Yoga in Kleingruppen bis zu 10 Personen.',
  keywords: 'Yoga Leipzig, Yoga Leutzsch, Bianka Schümann, Hatha Yoga Leipzig, Yoga Anfänger Leipzig, Yogatherapie, Yoga Kleingruppen',
  authors: [{ name: 'Bianka Schümann' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
