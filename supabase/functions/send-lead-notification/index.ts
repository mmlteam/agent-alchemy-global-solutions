import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log('🚀 Email function started - Method:', req.method)
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('✅ CORS preflight request handled')
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    console.log('❌ Invalid method:', req.method)
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders
    })
  }

  try {
    console.log('📝 Parsing request body...')
    const { name, email, phone, company_size, challenge } = await req.json()
    console.log('📋 Lead data received:', { 
      name, 
      email, 
      phone, 
      company_size: company_size || 'Not specified', 
      challenge: challenge || 'Not specified' 
    })

    if (!RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY not found in environment variables')
      return new Response('Email service not configured', { status: 500 })
    }
    console.log('✅ RESEND_API_KEY found')

    const emailPayload = {
      from: 'hello@mmlprojects.in',
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
    }

    console.log('📧 Preparing email with payload:', {
      from: emailPayload.from,
      to: emailPayload.to,
      subject: emailPayload.subject
    })

    console.log('🔄 Sending email to Resend API...')
    
    // Send email to your team
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    })
    
    console.log('📬 Resend API response status:', emailResponse.status)

    if (!emailResponse.ok) {
      const error = await emailResponse.text()
      console.error('❌ Email send failed with status:', emailResponse.status)
      console.error('❌ Error details:', error)
      console.error('❌ Response headers:', Object.fromEntries(emailResponse.headers.entries()))
      return new Response('Failed to send email', { 
        status: 500,
        headers: corsHeaders
      })
    }

    const emailData = await emailResponse.json()
    console.log('✅ Email sent successfully!')
    console.log('📧 Email ID:', emailData.id)
    console.log('📊 Full response:', emailData)

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully', emailId: emailData.id }),
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )

  } catch (error) {
    console.error('Error in send-lead-notification:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )
  }
})