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

export default function Datenschutz() {
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
          <h1 style={{ marginBottom: '2.5rem' }}>Datenschutzerklärung</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section style={{ padding: '0', border: 'none' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-sand)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                1. Datenschutz auf einen Blick
              </h3>
              <h4 style={{ fontSize: '1.1rem', margin: '1rem 0 0.5rem 0' }}>Allgemeine Hinweise</h4>
              <p style={{ fontSize: '0.95rem' }}>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
              <h4 style={{ fontSize: '1.1rem', margin: '1rem 0 0.5rem 0' }}>Datenerfassung auf dieser Website</h4>
              <p style={{ fontSize: '0.95rem' }}>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden zum einen dadurch erhoben, 
                dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in das 
                Kontaktformular eingeben.
              </p>
            </section>

            <section style={{ padding: '0', border: 'none' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-sand)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                2. Allgemeine Hinweise und Pflichtinformationen
              </h3>
              <p style={{ fontSize: '0.95rem' }}>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                dieser Datenschutzerklärung.
              </p>
              <p style={{ fontSize: '0.95rem' }}>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) 
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist 
                nicht möglich.
              </p>
            </section>

            <section style={{ padding: '0', border: 'none' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-sand)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                3. Datenerfassung über das Kontaktformular
              </h3>
              <p style={{ fontSize: '0.95rem' }}>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p style={{ fontSize: '0.95rem' }}>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse 
                an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), falls diese abgefragt wurde.
              </p>
            </section>

            <section style={{ padding: '0', border: 'none' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-sand)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                4. Ihre Rechte (Auskunft, Löschung, Sperrung)
              </h3>
              <p style={{ fontSize: '0.95rem' }}>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck 
                der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu 
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum 
                angegebenen Adresse an uns wenden.
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
