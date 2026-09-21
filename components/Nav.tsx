'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, site } from '@/content/data'

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

  return (
    <>
      <header className={navClass}>
        <div className="nav-left">
          <nav aria-label="Principal">
            <ul className="nav-links">
              {navLinks.slice(0, 2).map(l => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="nav-logo-wrap">
          <Link href="/" className="nav-logo">{site.fullName}</Link>
        </div>

        <div className="nav-right">
          <nav aria-label="Secundaria" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            <ul className="nav-links">
              {navLinks.slice(2).map(l => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contacto" className="nav-cta" style={{ marginLeft: 24 }}>
            Hablemos
          </Link>
          <button
            className="nav-burger"
            aria-label="Abrir menú"
            onClick={() => setDrawerOpen(true)}
            style={{ marginLeft: 16 }}
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
            ✕
          </button>
        </div>
        <ul className="drawer-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setDrawerOpen(false)}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/contacto" onClick={() => setDrawerOpen(false)}>Contacto</Link>
          </li>
        </ul>
      </aside>
    </>
  )
}
