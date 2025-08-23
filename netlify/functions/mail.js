import { Resend } from 'resend';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = event.headers['content-type']?.includes('application/json')
      ? JSON.parse(event.body)
      : Object.fromEntries(new URLSearchParams(event.body));

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'GX Painting <onboarding@resend.dev>',
      to: 'gxpainting@hotmail.com',
      subject: body._subject || 'New estimate request',
      reply_to: body.email,
      text: `
Name: ${body.name}
Phone: ${body.phone}
Email: ${body.email}
Address: ${body.address}
Details: ${body.details}
      `
    });

    return { statusCode: 200, body: 'OK' };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
}
