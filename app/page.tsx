import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { services, weddings, testimonials, process } from '@/content/data'

export const metadata: Metadata = {
  title: 'Baciami Events Studio | Wedding Planner Costa Brava · Girona · Barcelona',
  description:
    'Bodas exclusivas en la Costa Brava. Alba, wedding planner en Girona y Barcelona, organiza cada boda como si fuera la primera. Agenda abierta 2027–2028.',
}

const marqueeText = 'Costa Brava · Girona · Barcelona · Cadaqués · Bagur · Bodas exclusivas · Organización integral · Coordinación ·'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        {/* Left: copy panel */}
        <div className="hero-text">
          <div>
            <p className="hero-eyebrow">Wedding Planner · Costa Brava</p>
            <h1 className="hero-display">
              La boda<br />que habéis<br />imaginado
            </h1>
            <p className="hero-sub">
              Bodas exclusivas en la Costa Brava, Girona y Barcelona. Alba cuida cada detalle para que el día más importante de vuestra vida sea exactamente como lo soñabais.
            </p>
            <div className="hero-ctas">
              <Link href="/contacto" className="btn btn-wine">Hablemos de vuestra boda</Link>
              <Link href="/bodas" className="btn btn-ghost-light">Ver bodas</Link>
            </div>
          </div>

          <div className="hero-foot">
            <span className="hero-foot-loc">Costa Brava · Girona · Barcelona</span>
            <div className="hero-foot-scroll">
              <div className="hero-scroll-line" />
              <span>Scroll</span>
            </div>
          </div>
        </div>

        {/* Right: photo */}
        <div className="hero-media">
          <Image
            src="/photos/bride-stairs.jpg"
            alt="Boda en Costa Brava"
            fill
            priority
            sizes="54vw"
          />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-section" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="marquee-text">{marqueeText}</span>
          ))}
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="section">
        <div className="wrap">
          <div className="intro-split">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 24 }}>Soy Alba</p>
              <h2 className="headline" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 32 }}>
                La persona que cuida<br />de que todo funcione<br />mientras vosotros os casáis
              </h2>
              <p className="body-text" style={{ marginBottom: 24 }}>
                Wedding planner de la Costa Brava. Llevo años acompañando a parejas que quieren una boda con alma propia: espacios con historia, luz mediterránea y una celebración que se siente natural, no producida.
              </p>
              <p className="body-text" style={{ marginBottom: 40 }}>
                Mi trabajo es que el día más importante de vuestra vida sea exactamente como lo habéis imaginado, y que vosotros podáis estar presentes en cada momento de él. Sin gestiones, sin imprevistos, sin estrés.
              </p>
              <Link href="/sobre-alba" className="link-arrow">
                Conocer a Alba <span aria-hidden="true">&#8594;</span>
              </Link>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                <Image
                  src="/photos/alba-flowers.jpg"
                  alt="Alba, wedding planner Costa Brava"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FEATURED WEDDINGS ── */}
      <section className="section section--parchment">
        <div className="wrap">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 20 }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: 16 }}>Bodas recientes</p>
                <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
                  Cada boda,<br />una historia única
                </h2>
              </div>
              <Link href="/bodas" className="link-arrow">
                Ver todas <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>
          </Reveal>

          <div className="portfolio-grid">
            {weddings.map((w, i) => (
              <Reveal key={w.slug} delay={(i % 3) as 0 | 1 | 2}>
                <Link href={`/bodas/${w.slug}`} className="portfolio-item">
                  <div className="portfolio-img" style={{ aspectRatio: i === 1 ? '3/4' : '2/3' }}>
                    <Image
                      src={w.photos[0]}
                      alt={w.couple}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="portfolio-overlay">
                      <span className="link-arrow--light link-arrow" style={{ color: 'var(--on-dark)' }}>
                        Ver boda <span aria-hidden="true">&#8594;</span>
                      </span>
                    </div>
                  </div>
                  <div className="portfolio-meta">
                    <p className="eyebrow" style={{ marginBottom: 8 }}>{w.location} · {w.season} {w.year}</p>
                    <p className="subheadline" style={{ fontSize: 22 }}>{w.couple}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Servicios</p>
            <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 60px)', marginBottom: 64 }}>
              Cómo puedo<br />ayudaros
            </h2>
          </Reveal>

          <div>
            {services.map((s, i) => (
              <div key={s.id} className="service-row">
                <div className="service-row-header">
                  <span className="service-num">0{i + 1}</span>
                  <span className="service-title">{s.title}</span>
                  <span className="service-tag">{s.tag}</span>
                </div>
                <div className="service-body">
                  <span />
                  <div className="service-body-inner">
                    <p className="body-text">{s.lead}</p>
                    <Link href="/servicios" className="link-arrow">
                      Saber más <span aria-hidden="true">&#8594;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATEMENT SECTION ── */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal>
            <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
              <p className="eyebrow" style={{ color: 'var(--on-dark-dim)', marginBottom: 40 }}>
                Filosofía
              </p>
              <p className="pull-quote" style={{ color: 'var(--on-dark)', fontSize: 'clamp(28px, 5vw, 64px)' }}>
                "Una boda no debería sentirse como un evento producido. Debería sentirse como la mejor versión del día que siempre quisisteis vivir."
              </p>
              <p className="eyebrow" style={{ color: 'var(--on-dark-dim)', marginTop: 48 }}>
                Alba, Baciami Events
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SPLIT: Cyprus + text ── */}
      <div className="split">
        <div className="split-img">
          <Image
            src="/photos/couple-cypress.jpg"
            alt="Pareja entre cipreses, Costa Brava"
            fill
            style={{ objectFit: 'cover' }}
            sizes="50vw"
          />
        </div>
        <div className="split-body" style={{ background: 'var(--parchment)' }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 24 }}>Agenda 2027 · 2028</p>
            <h2 className="headline" style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 28 }}>
              Trabajo con pocas parejas al año
            </h2>
            <p className="body-text" style={{ marginBottom: 16 }}>
              Trabajo con un número muy limitado de bodas para poder estar presente de verdad en cada proceso. No somos una agencia. Soy yo, Alba, con vosotros desde el principio hasta el último baile.
            </p>
            <p className="body-text" style={{ marginBottom: 40 }}>
              Si vuestra fecha es en 2027 o 2028, este es el momento de escribirme.
            </p>
            <Link href="/contacto" className="btn btn-wine">
              Consultar disponibilidad
            </Link>
          </Reveal>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <section className="section--sm">
        <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 56, textAlign: 'center' }}>Lo que dicen las parejas</p>
          </Reveal>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={(i % 3) as 0 | 1 | 2}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, s) => <div key={s} className="testimonial-star" />)}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <p className="testimonial-name">{t.author}</p>
                  <p className="testimonial-meta">{t.date} · {t.service}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Cómo trabajamos</p>
            <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 60px)', marginBottom: 64 }}>
              Del primer contacto<br />al gran día
            </h2>
          </Reveal>
        </div>
        <div className="process-grid">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="process-cell">
                <span className="process-num">{p.step}</span>
                <p className="subheadline" style={{ fontSize: 20, marginBottom: 16 }}>{p.title}</p>
                <p className="body-text" style={{ fontSize: 14 }}>{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="section section--wine">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow" style={{ color: 'rgba(245,240,234,0.5)', marginBottom: 32 }}>
              Empezamos
            </p>
            <h2 className="headline" style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: 'var(--on-dark)', marginBottom: 32 }}>
              Vuestra boda<br />empieza aquí
            </h2>
            <p style={{ color: 'var(--on-dark-dim)', marginBottom: 48, maxWidth: 440, margin: '0 auto 48px', fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 15, lineHeight: 1.7 }}>
              Escribidme y hablamos. Sin compromisos. Solo una conversación para ver si tenemos fit.
            </p>
            <Link href="/contacto" className="btn btn-ghost-light">
              Empezar la conversación <span aria-hidden="true">&#8594;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
