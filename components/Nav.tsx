'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navLinks, site } from '@/content/data'

// Contacto is already the last item in navLinks — filter it out of the
// main bar to avoid duplication, then keep it only in the CTA button.
const mainLinks = navLinks.filter(l => l.href !== '/contacto')

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const navClass = ['nav', !isHome ? 'light' : scrolled ? 'scrolled' : ''].filter(Boolean).join(' ')
  const isDark = isHome && !scrolled

  return (
    <>
      <header className={navClass}>
        {/* ── LOGO LEFT ── */}
        <div className="nav-brand">
          <Link href="/" className="nav-logo-link" aria-label={site.fullName}>
            <Image
              src="/photos/logo.jpg"
              alt={site.fullName}
              width={110}
              height={44}
              priority
              className={`nav-logo-img${isDark ? ' nav-logo-img--dark' : ''}`}
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
          </Link>
        </div>

        {/* ── LINKS + CTA RIGHT ── */}
        <div className="nav-right">
          <nav aria-label="Principal">
            <ul className="nav-links">
              {mainLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/contacto" className="nav-cta">
            Hablemos
          </Link>

          <button
            className="nav-burger"
            aria-label="Abrir menú"
            onClick={() => setDrawerOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`overlay${drawerOpen ? ' open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer${drawerOpen ? ' open' : ''}`} aria-hidden={!drawerOpen}>
        <div className="drawer-header">
          <span className="nav-logo" style={{ color: 'var(--on-dark)' }}>{site.fullName}</span>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Cerrar menú"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--on-dark-dim)', fontSize: 24 }}
          >
            &#215;
          </button>
        </div>
        <ul className="drawer-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setDrawerOpen(false)}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
