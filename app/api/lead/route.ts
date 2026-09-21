import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { name, email, phone, date, guests, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Baciami Events Web <noreply@baciamievents.com>',
      to: ['hola@baciamievents.com'],
      replyTo: email,
      subject: `Nueva consulta de ${name}`,
      text: `
Nueva consulta de boda:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No indicado'}
Fecha prevista: ${date || 'No indicada'}
Invitados: ${guests || 'No indicado'}

Mensaje:
${message || 'Sin mensaje'}
      `.trim(),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
