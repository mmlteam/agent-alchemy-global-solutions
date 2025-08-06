import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const { name, email, phone, company_size, challenge } = await req.json()

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found')
      return new Response('Email service not configured', { status: 500 })
    }

    // Send email to your team
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'agentx@mmlprojects.in',
        to: ['sharik@makemelive.in'],
        subject: `New Lead: ${name} - Free Automation Audit`,
        html: `
          <h2>New Lead Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company Size:</strong> ${company_size || 'Not specified'}</p>
          <p><strong>Main Challenge:</strong> ${challenge || 'Not specified'}</p>
          <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
          
          <p style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 5px;">
            <strong>Next Steps:</strong> Contact this lead within 12 hours for best conversion rates.
          </p>
        `,
      }),
    })

    if (!emailResponse.ok) {
      const error = await emailResponse.text()
      console.error('Email send failed:', error)
      return new Response('Failed to send email', { status: 500 })
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in send-lead-notification:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
})