import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders
    })
  }

  try {
    const { name, email, phone, company_size, challenge, leadId } = await req.json()
    
    console.log('Lead ID received:', leadId)
    console.log('Processing email for lead:', { name, email, leadId })
    
    if (!RESEND_API_KEY) {
      console.log('RESEND_API_KEY not found')
      return new Response('Email service not configured', { status: 500 })
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

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

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    })

    if (!emailResponse.ok) {
      const error = await emailResponse.text()
      console.log('Email failed with status:', emailResponse.status, 'Error:', error)
      
      // Update lead with failed status if leadId provided
      if (leadId) {
        console.log('Updating lead', leadId, 'status to failed')
        const { data: updateData, error: updateError } = await supabase
          .from('leads')
          .update({ email_status: 'failed' })
          .eq('id', leadId)
        
        if (updateError) {
          console.error('Failed to update lead status to failed:', updateError)
        } else {
          console.log('Successfully updated lead status to failed')
        }
      } else {
        console.log('No leadId provided, skipping status update')
      }

      return new Response('Failed to send email', { 
        status: 500,
        headers: corsHeaders
      })
    }

    const emailData = await emailResponse.json()
    console.log('Email sent successfully, Resend ID:', emailData.id)

    // Update lead with success status if leadId provided
    if (leadId) {
      console.log('Updating lead', leadId, 'status to sent')
      const { data: updateData, error: updateError } = await supabase
        .from('leads')
        .update({ email_status: 'sent' })
        .eq('id', leadId)
      
      if (updateError) {
        console.error('Failed to update lead status to sent:', updateError)
      } else {
        console.log('Successfully updated lead status to sent')
      }
    } else {
      console.log('No leadId provided, skipping status update')
    }

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