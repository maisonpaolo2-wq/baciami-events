import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { services, faqs, fitYes, fitNo } from '@/content/data'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Organización integral, coordinación del día y asesoramiento. Descubre cómo Baciami Events Studio puede ayudarte a organizar tu boda en la Costa Brava.',
}

export default function ServiciosPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <header className="section section--dark" style={{ paddingTop: 180 }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ color: 'var(--on-dark-dim)', marginBottom: 24 }}>Servicios</p>
            <h1 className="headline" style={{ fontSize: 'clamp(48px, 8vw, 100px)', color: 'var(--on-dark)', marginBottom: 40 }}>
              Cómo puedo<br />ayudaros
            </h1>
            <p className="body-text" style={{ color: 'var(--on-dark-dim)', maxWidth: 500 }}>
              Tres formas de trabajar juntos. Desde la organización completa hasta una sesión de orientación. Escojo el servicio que tiene sentido para vuestra situación.
            </p>
          </Reveal>
        </div>
      </header>

      {/* ── SERVICES DETAIL ── */}
      {services.map((s, i) => (
        <section key={s.id} className={`split${i % 2 === 1 ? ' split--reverse' : ''}`} style={{ minHeight: 580 }}>
          <div className="split-img">
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="50vw"
              priority={i === 0}
            />
          </div>
          <div className="split-body" style={{ background: i % 2 === 1 ? 'var(--parchment)' : 'var(--cream)' }}>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 16 }}>0{i + 1}</p>
              <h2 className="headline" style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 24 }}>
                {s.title}
              </h2>
              <p className="body-text" style={{ marginBottom: 16 }}>{s.lead}</p>
              <p className="body-text" style={{ marginBottom: 32 }}>{s.detail}</p>

              <div style={{ marginBottom: 40 }}>
                <p className="eyebrow" style={{ marginBottom: 16 }}>Incluye</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {s.includes.map(inc => (
                    <li key={inc} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ width: 10, height: 1, background: 'var(--forest)', marginTop: 10, flexShrink: 0, display: 'block' }} />
                      <span className="body-text" style={{ fontSize: 14 }}>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contacto" className="link-arrow">
                Consultar este servicio <span aria-hidden="true">&#8594;</span>
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── FIT SECTION ── */}
      <section className="section section--parchment">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Para quién es esto</p>
            <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 60px)', marginBottom: 72 }}>
              Trabajamos bien juntos<br />si...
            </h2>
          </Reveal>

          <div className="fit-grid">
            <Reveal>
              <div>
                <p className="eyebrow" style={{ marginBottom: 24, color: 'var(--forest)' }}>Es para vosotros</p>
                <ul className="fit-list fit-list--yes">
                  {fitYes.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div>
                <p className="eyebrow" style={{ marginBottom: 24, color: 'var(--ink-3)' }}>Quizás no encajamos</p>
                <ul className="fit-list fit-list--no">
                  {fitNo.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Preguntas frecuentes</p>
            <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: 64 }}>
              Lo que más<br />me preguntan
            </h2>
          </Reveal>

          <div style={{ maxWidth: 720 }}>
            {faqs.map((f, i) => (
              <Reveal key={i}>
                <details className="faq-item">
                  <summary>
                    <span className="faq-q">{f.q}</span>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--dark">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 64px)', color: 'var(--on-dark)', marginBottom: 32 }}>
              ¿Tiene sentido trabajar juntos?
            </h2>
            <p style={{ color: 'var(--on-dark-dim)', marginBottom: 48, maxWidth: 420, margin: '0 auto 48px', fontFamily: 'var(--sans)', fontWeight: 300 }}>
              Escríbeme y lo averiguamos. Una conversación, sin compromiso.
            </p>
            <Link href="/contacto" className="btn btn-wine">Contactar ahora</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
