'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', guests: '', message: '',
  })

  const update = (field: string, value: string) =>
    setForm(f => ({ ...f, [field]: value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div style={{ paddingTop: 40 }}>
        <p className="eyebrow" style={{ marginBottom: 20 }}>Mensaje enviado</p>
        <p className="headline" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
          Gracias,<br />te escribo pronto.
        </p>
        <p className="body-text" style={{ marginTop: 20, maxWidth: 380 }}>
          Suelo responder en 24–48 horas. Si es urgente, escríbeme por WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div className="form-field">
          <label className="form-label" htmlFor="name">Nombre</label>
          <input id="name" className="form-input" type="text" required placeholder="Tu nombre"
            value={form.name} onChange={e => update('name', e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="email">Email</label>
          <input id="email" className="form-input" type="email" required placeholder="tu@email.com"
            value={form.email} onChange={e => update('email', e.target.value)} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div className="form-field">
          <label className="form-label" htmlFor="date">Fecha prevista</label>
          <input id="date" className="form-input" type="text" placeholder="Mes y año aproximado"
            value={form.date} onChange={e => update('date', e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="guests">Invitados aprox.</label>
          <input id="guests" className="form-input" type="text" placeholder="Ej. 80 personas"
            value={form.guests} onChange={e => update('guests', e.target.value)} />
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="phone">Teléfono (opcional)</label>
        <input id="phone" className="form-input" type="tel" placeholder="+34 600 000 000"
          value={form.phone} onChange={e => update('phone', e.target.value)} />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="message">Cuéntame vuestra boda</label>
        <textarea id="message" className="form-textarea" rows={4}
          placeholder="Dónde os imagináis, qué buscáis, qué os importa..."
          value={form.message} onChange={e => update('message', e.target.value)} />
      </div>

      {status === 'error' && (
        <p style={{ color: '#c0392b', fontSize: 13 }}>
          Algo ha fallado. Escríbeme directamente a {' '}
          <a href="mailto:hola@baciamievents.com" style={{ color: 'inherit' }}>hola@baciamievents.com</a>
        </p>
      )}

      <button type="submit" className="btn btn-wine" disabled={status === 'loading'}
        style={{ alignSelf: 'flex-start' }}>
        {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
      </button>
    </form>
  )
}
