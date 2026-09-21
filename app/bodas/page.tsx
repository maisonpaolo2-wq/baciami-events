import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { weddings } from '@/content/data'

export const metadata: Metadata = {
  title: 'Bodas',
  description:
    'Bodas organizadas por Baciami Events en la Costa Brava, Girona y más allá. Cada celebración, una historia única.',
}

export default function BodasPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <header style={{ background: 'var(--cream)', paddingTop: 180, paddingBottom: 80 }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 24 }}>Portfolio</p>
            <h1 className="headline" style={{ fontSize: 'clamp(48px, 8vw, 100px)', marginBottom: 40 }}>
              Bodas que<br />se recuerdan
            </h1>
            <p className="body-text" style={{ maxWidth: 480 }}>
              Cada pareja tiene su propia historia. Aquí están algunas de las que he tenido el privilegio de acompañar.
            </p>
          </Reveal>
        </div>
      </header>

      {/* ── BODAS LIST ── */}
      <section style={{ paddingBottom: 128 }}>
        {weddings.map((w, i) => (
          <Reveal key={w.slug}>
            <div className={`split${i % 2 === 1 ? ' split--reverse' : ''}`} style={{ minHeight: 580, marginBottom: 2 }}>
              <div className="split-img">
                <Image
                  src={w.photos[0]}
                  alt={`${w.couple} · ${w.location}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="50vw"
                  priority={i === 0}
                />
              </div>
              <div className="split-body" style={{ background: i % 2 === 1 ? 'var(--parchment)' : 'var(--cream)' }}>
                <p className="eyebrow" style={{ marginBottom: 20 }}>{w.location} · {w.season} {w.year}</p>
                <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 64px)', marginBottom: 24 }}>
                  {w.couple}
                </h2>
                <p className="body-text" style={{ marginBottom: 16 }}>{w.description}</p>
                <p className="eyebrow" style={{ marginBottom: 32 }}>{w.type}</p>
                <Link href={`/bodas/${w.slug}`} className="link-arrow">
                  Ver la boda <span aria-hidden="true">&#8594;</span>
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="section section--parchment">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 24 }}>La vuestra puede ser la siguiente</p>
            <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 64px)', marginBottom: 40 }}>
              ¿Dónde imagináis<br />vuestra boda?
            </h2>
            <Link href="/contacto" className="btn btn-wine">Empezar a planificar</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
