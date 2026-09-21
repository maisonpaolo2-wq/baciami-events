import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { testimonials } from '@/content/data'

export const metadata: Metadata = {
  title: 'Sobre Alba',
  description:
    'Wedding planner de la Costa Brava. Conozco a Alba, la persona detrás de Baciami Events Studio: su filosofía, su forma de trabajar y por qué las parejas la eligen.',
}

export default function SobreAlbaPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <header className="section section--dark" style={{ paddingTop: 180 }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ color: 'var(--on-dark-dim)', marginBottom: 24 }}>Sobre mí</p>
            <h1 className="headline" style={{ fontSize: 'clamp(48px, 8vw, 100px)', color: 'var(--on-dark)', marginBottom: 40 }}>
              Soy Alba
            </h1>
            <p className="body-text" style={{ color: 'var(--on-dark-dim)', maxWidth: 520, fontSize: 16 }}>
              Wedding planner de la Costa Brava. Creo en las bodas que parecen haber ocurrido siempre, no producidas. En los espacios con alma, la luz natural y las celebraciones que duran toda una noche.
            </p>
          </Reveal>
        </div>
      </header>

      {/* ── SPLIT: foto + texto ── */}
      <div className="split">
        <div className="split-img">
          <Image
            src="/photos/table-setup.jpg"
            alt="Alba organizando una boda en Costa Brava"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="50vw"
            priority
          />
        </div>
        <div className="split-body">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 24 }}>Mi historia</p>
            <h2 className="headline" style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 28 }}>
              La Costa Brava<br />como escenario de vida
            </h2>
            <p className="body-text" style={{ marginBottom: 20 }}>
              Nací en esta tierra de masías, cipreses y cala. La Costa Brava no es solo donde trabajo, es donde vivo y donde entiendo la belleza: en lo que ya existe, en lo que tiene historia, en lo que no necesita ser construido de cero porque ya es perfecto.
            </p>
            <p className="body-text" style={{ marginBottom: 20 }}>
              Empecé a organizar bodas porque me daba cuenta de que muchas parejas no conseguían que su celebración reflejara quiénes eran. Había producción, había flores, había comida, pero faltaba alma. Desde entonces, mi trabajo es encontrar ese alma y hacerla visible.
            </p>
            <p className="body-text">
              Cada boda que organizo la trato como si fuera la única. Porque para vosotros, lo es.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── VALORES ── */}
      <section className="section section--parchment">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Mi forma de trabajar</p>
            <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 60px)', marginBottom: 80 }}>
              Lo que me importa<br />en cada boda
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--line-md)' }}>
            {[
              {
                num: '01',
                title: 'La pareja primero',
                text: 'No trabajo para las familias, para las tendencias ni para las redes sociales. Trabajo para vosotros. Vuestra boda tiene que reflejaros a vosotros dos.',
              },
              {
                num: '02',
                title: 'Calma en el proceso',
                text: 'Organizar una boda no tiene por qué ser agobiante. Mi trabajo es llevar el peso para que vosotros podáis vivir el proceso con ilusión, no con ansiedad.',
              },
              {
                num: '03',
                title: 'Detalles que importan',
                text: 'No me obsesiono con que todo sea perfecto. Me obsesiono con que todo sea auténtico. La diferencia está en que lo perfecto se olvida y lo auténtico se recuerda.',
              },
            ].map((v, i) => (
              <Reveal key={v.num} delay={(i % 3) as 0 | 1 | 2}>
                <div style={{ background: 'var(--parchment)', padding: '48px 40px' }}>
                  <span className="process-num" style={{ fontSize: 72, marginBottom: 20, display: 'block' }}>{v.num}</span>
                  <p className="subheadline" style={{ fontSize: 22, marginBottom: 16 }}>{v.title}</p>
                  <p className="body-text" style={{ fontSize: 14 }}>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEGUNDA SPLIT ── */}
      <div className="split split--reverse">
        <div className="split-img">
          <Image
            src="/photos/ceremony-outdoor.jpg"
            alt="Ceremonia al aire libre en la Costa Brava"
            fill
            style={{ objectFit: 'cover' }}
            sizes="50vw"
          />
        </div>
        <div className="split-body">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 24 }}>También viajamos</p>
            <h2 className="headline" style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 28 }}>
              La Costa Brava es mi base,<br />pero no mi límite
            </h2>
            <p className="body-text" style={{ marginBottom: 20 }}>
              He cruzado el país para acompañar a parejas en Asturias, he organizado bodas en Cadaqués y Bagur, en casas rurales y en fincas históricas de toda Cataluña.
            </p>
            <p className="body-text" style={{ marginBottom: 40 }}>
              Si tenéis una localización especial en mente, hablamos. Trabajo donde la boda lo merezca.
            </p>
            <Link href="/contacto" className="link-arrow">
              Consultar disponibilidad <span aria-hidden="true">&#8594;</span>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 56, textAlign: 'center' }}>
              Palabras que llegan directas al corazón
            </p>
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

      {/* ── CTA ── */}
      <section className="section section--parchment-2" style={{ paddingBottom: 128 }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 64px)', marginBottom: 32 }}>
              ¿Os imagináis casándoos<br />en la Costa Brava?
            </h2>
            <p className="body-text" style={{ marginBottom: 40, maxWidth: 420, margin: '0 auto 40px' }}>
              Hablamos sin compromiso. Cuéntame vuestra idea y veo cómo puedo ayudaros.
            </p>
            <Link href="/contacto" className="btn btn-wine">Contactar con Alba</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
