import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import { weddings } from '@/content/data'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return weddings.map(w => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const w = weddings.find(w => w.slug === slug)
  if (!w) return {}
  return {
    title: `${w.couple} · ${w.location}`,
    description: w.description,
  }
}

export default async function WeddingPage({ params }: Props) {
  const { slug } = await params
  const w = weddings.find(w => w.slug === slug)
  if (!w) notFound()

  const others = weddings.filter(o => o.slug !== w.slug)

  return (
    <>
      {/* ── HERO ── */}
      <header style={{ height: '90vh', minHeight: 600, position: 'relative', background: 'var(--dark)' }}>
        <Image
          src={w.photos[0]}
          alt={`${w.couple} · ${w.location}`}
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="100vw"
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(23,14,9,0.8) 0%, rgba(23,14,9,0.3) 60%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
          padding: '0 72px 72px',
        }}>
          <p className="eyebrow" style={{ color: 'var(--on-dark-dim)', marginBottom: 16 }}>
            {w.location} · {w.season} {w.year} · {w.type}
          </p>
          <h1 className="headline" style={{ fontSize: 'clamp(48px, 8vw, 96px)', color: 'var(--on-dark)' }}>
            {w.couple}
          </h1>
        </div>
      </header>

      {/* ── DESCRIPTION ── */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <Reveal>
              <p className="pull-quote" style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}>
                "{w.description}"
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="body-text" style={{ marginBottom: 32 }}>{w.longDescription}</p>
              <p className="eyebrow">{w.type}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      {w.photos.length > 1 && (
        <section className="section section--parchment">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 40 }}>Galería</p>
            </Reveal>
            <Gallery
              images={w.photos}
              alts={w.photos.map((_, i) => `${w.couple} foto ${i + 1}`)}
            />
          </div>
        </section>
      )}

      {/* ── OTHER WEDDINGS ── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Más bodas</p>
            <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: 64 }}>
              Otras historias
            </h2>
          </Reveal>

          <div className="portfolio-grid">
            {others.slice(0, 2).map((o, i) => (
              <Reveal key={o.slug} delay={(i % 2) as 0 | 1 | 2}>
                <Link href={`/bodas/${o.slug}`} className="portfolio-item">
                  <div className="portfolio-img" style={{ aspectRatio: '2/3' }}>
                    <Image
                      src={o.photos[0]}
                      alt={o.couple}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="portfolio-overlay">
                      <span className="link-arrow" style={{ color: 'var(--on-dark)' }}>
                        Ver boda <span aria-hidden="true">&#8594;</span>
                      </span>
                    </div>
                  </div>
                  <div className="portfolio-meta">
                    <p className="eyebrow" style={{ marginBottom: 8 }}>{o.location} · {o.year}</p>
                    <p className="subheadline" style={{ fontSize: 22 }}>{o.couple}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ textAlign: 'center', marginTop: 64 }}>
              <Link href="/bodas" className="link-arrow">
                Ver todas las bodas <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--wine">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 64px)', color: 'var(--on-dark)', marginBottom: 32 }}>
              ¿Queréis que la vuestra<br />sea la siguiente?
            </h2>
            <Link href="/contacto" className="btn btn-ghost-light" style={{ marginTop: 8 }}>
              Hablemos <span aria-hidden="true">&#8594;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
