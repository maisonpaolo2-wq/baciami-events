import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { site } from '@/content/data'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Escríbeme y hablamos de vuestra boda. Sin compromiso, solo una conversación para ver si encajamos. Alba, wedding planner Costa Brava.',
}

export default function ContactoPage() {
  return (
    <div className="contact-split">
      {/* ── LEFT ── */}
      <div className="contact-left">
        <Reveal>
          <p className="eyebrow" style={{ color: 'var(--on-dark-dim)', marginBottom: 32 }}>Contacto</p>
          <h1 className="headline" style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--on-dark)', marginBottom: 40 }}>
            Hablemos de<br />vuestra boda
          </h1>
          <p style={{ color: 'var(--on-dark-dim)', fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 15, lineHeight: 1.75, maxWidth: 380, marginBottom: 64 }}>
            No hay formularios complicados ni listas de precios en PDF. Solo cuéntame vuestra boda y veo cómo puedo ayudaros.
          </p>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 'auto' }}>
          <Reveal delay={2}>
            <div>
              <p className="eyebrow" style={{ color: 'rgba(245,240,234,0.3)', marginBottom: 12 }}>Email</p>
              <a href={`mailto:${site.email}`} className="contact-info-link">{site.email}</a>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div>
              <p className="eyebrow" style={{ color: 'rgba(245,240,234,0.3)', marginBottom: 12 }}>WhatsApp</p>
              <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
                target="_blank" rel="noopener noreferrer" className="contact-info-link">
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div>
              <p className="eyebrow" style={{ color: 'rgba(245,240,234,0.3)', marginBottom: 12 }}>Instagram</p>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="contact-info-link">
                {site.instagram}
              </a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div style={{ paddingTop: 32, borderTop: '1px solid var(--line-dk)' }}>
              <p style={{ color: 'rgba(245,240,234,0.3)', fontSize: 12, fontFamily: 'var(--sans)', fontWeight: 300 }}>
                Agenda abierta 2027 · 2028
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div className="contact-right">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 48 }}>Formulario de contacto</p>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  )
}
