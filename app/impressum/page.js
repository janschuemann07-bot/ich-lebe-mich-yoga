import Link from 'next/link'

function FeatherLogo() {
  return (
    <svg 
      viewBox="0 0 100 100" 
      width="36" 
      height="36" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ color: 'var(--color-sage)' }}
    >
      <path d="M 50,85 C 47,65 47,35 54,15" />
      <path d="M 48.5,75 C 33,68 28,57 48.5,47" />
      <path d="M 49.5,60 C 30,53 26,40 50.5,33" />
      <path d="M 51.5,45 C 30,35 28,23 52.5,19" />
      <path d="M 49.5,75 C 65,68 70,57 49.5,47" />
      <path d="M 50.5,60 C 70,53 74,40 49.5,33" />
      <path d="M 51.5,45 C 70,35 72,23 50.5,19" />
    </svg>
  )
}

export default function Impressum() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <Link href="/" className="logo-link">
            <FeatherLogo />
            <span>ich lebe mich</span>
          </Link>
          <nav>
            <ul className="nav-menu">
              <li><Link href="/" className="nav-link">Zurück zur Startseite</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ paddingTop: '8rem', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px', paddingBottom: '5rem' }}>
          <h1 style={{ marginBottom: '2.5rem' }}>Impressum</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section style={{ padding: '0', border: 'none' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-sand)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                Angaben gemäß § 5 TMG
              </h3>
              <p style={{ margin: '0' }}><strong>Inhaber:</strong> Bianka Schümann</p>
              <p style={{ margin: '0' }}>Am Tanzplan 3</p>
              <p style={{ margin: '0' }}>04179 Leipzig (Leutzsch)</p>
            </section>

            <section style={{ padding: '0', border: 'none' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-sand)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                Kontakt
              </h3>
              <p style={{ margin: '0' }}><strong>Telefon:</strong> 0341 / 49 570 111</p>
              <p style={{ margin: '0' }}><strong>Mobil:</strong> 0173 / 85 90 277</p>
              <p style={{ margin: '0' }}><strong>E-Mail:</strong> info@ich-lebe-mich.de</p>
            </section>

            <section style={{ padding: '0', border: 'none' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-sand)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                Steuernummer
              </h3>
              <p style={{ margin: '0' }}><strong>St.-Nr.:</strong> 232/272/16182</p>
            </section>

            <section style={{ padding: '0', border: 'none' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-sand)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                Haftungsausschluss (Disclaimer)
              </h3>
              <h4 style={{ fontSize: '1.1rem', margin: '1rem 0 0.5rem 0' }}>Haftung für Inhalte</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <h4 style={{ fontSize: '1.1rem', margin: '1rem 0 0.5rem 0' }}>Haftung für Links</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="footer" style={{ padding: '3rem 0' }}>
        <div className="container footer-bottom" style={{ border: 'none', paddingTop: '0' }}>
          <div>© {new Date().getFullYear()} ich lebe mich. Alle Rechte vorbehalten.</div>
          <div><Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Zurück zur Startseite</Link></div>
        </div>
      </footer>
    </>
  )
}
