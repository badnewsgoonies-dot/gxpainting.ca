
// netlify/functions/mail.js
// Sends contact form emails via Resend. Set RESEND_API_KEY in Netlify env vars.
import { Resend } from 'resend';

export default async (req, context) => {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }
    const { name, email, details } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = 'gxpainting@hotmail.com'; // change if needed
    const from = 'GX Painting <onboarding@resend.dev>'; // replace with a verified domain later

    await resend.emails.send({
      from,
      to,
      subject: 'New lead from GX Painting website',
      text: `Name: ${name}\nEmail: ${email}\nDetails:\n${details}`
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e?.message || 'Failed to send' }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    });
  }
};
