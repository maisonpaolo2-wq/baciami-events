import Link from 'next/link'
import { site, navLinks } from '@/content/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand">{site.fullName}</Link>
            <p className="footer-tagline">{site.tagline}</p>
            <p className="footer-tagline" style={{ marginTop: 20 }}>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-ig-link">
                {site.instagram}
              </a>
            </p>
          </div>

          <div>
            <p className="footer-col-label">Navegación</p>
            <ul className="footer-nav">
              {navLinks.map(l => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-col-label">Contacto</p>
            <ul className="footer-nav">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li style={{ marginTop: 8, color: 'var(--on-dark-dim)', fontSize: 13 }}>
                Agenda abierta 2027 · 2028
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} {site.fullName}. Todos los derechos reservados.</p>
          <p className="footer-copy">{site.location}</p>
        </div>
      </div>
    </footer>
  )
}
