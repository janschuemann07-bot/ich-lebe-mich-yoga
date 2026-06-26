import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, inquiryType, message } = await request.json()

    // 1. Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte fülle alle erforderlichen Felder aus.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not defined. Logging form data instead:', { name, email, inquiryType, message })
      return NextResponse.json({ success: true, mock: true })
    }

    // 2. Format the email content
    const emailHtml = `
      <h2>Neue Website-Anfrage</h2>
      <p>Es gibt eine neue Anfrage über das Kontaktformular deiner Yoga-Website:</p>
      <hr />
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Anfrage-Typ:</strong> ${inquiryType}</p>
      <p><strong>Nachricht:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
      <hr />
      <p style="font-size: 0.8rem; color: #888;">Gesendet von der ich-lebe-mich.de Website.</p>
    `

    // 3. Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Yoga Website <onboarding@resend.dev>', // Resend free-tier default sender
        to: 'info@ich-lebe-mich.de',
        subject: `Neue Yoga-Anfrage: ${inquiryType} von ${name}`,
        html: emailHtml,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Resend API error:', errorData)
      return NextResponse.json(
        { error: 'E-Mail-Zustellung fehlgeschlagen.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API handler error:', error)
    return NextResponse.json(
      { error: 'Ein interner Serverfehler ist aufgetreten.' },
      { status: 500 }
    )
  }
}
