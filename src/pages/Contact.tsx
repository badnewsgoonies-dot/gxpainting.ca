
import { useState } from 'react';
import { Container, TextField, Button, Alert, Stack, Typography } from '@mui/material';

const ENDPOINT = '/.netlify/functions/mail';

export default function Contact(){
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [err, setErr] = useState(''); const [hp, setHp] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault(); if (hp) return;
    const fd = new FormData(e.currentTarget);
    setStatus('sending'); setErr('');
    try {
      const payload = {
        name:String(fd.get('name')||''),
        email:String(fd.get('email')||''),
        details:String(fd.get('details')||'')
      };
      const res = await fetch(ENDPOINT, { method:'POST', headers:{ 'Content-Type':'application/json', 'Accept':'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent'); (e.target as HTMLFormElement).reset();
    } catch(e:any){ setStatus('error'); setErr(e?.message || 'Submission failed'); }
  }

  return (
    <Container maxWidth="md" sx={{ py:6 }}>
      <Typography variant="h4" sx={{ mb:2 }}>Contact</Typography>

      {status==='sent' && <Alert severity="success">Thanks! Your message was sent.</Alert>}
      {status==='error' && <Alert severity="error">Sorry, something went wrong. {err} — You can also email <a href="mailto:gxpainting@hotmail.com">gxpainting@hotmail.com</a>.</Alert>}

      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField name="name" label="Name" required />
          <TextField name="email" label="Email" type="email" required />
          <TextField name="details" label="Project details" multiline minRows={4} required />
          <input type="text" name="hp_field" value={hp} onChange={(e)=>setHp(e.target.value)} style={{ display:'none' }} aria-hidden />
          <Button type="submit" disabled={status==='sending'}>{status==='sending'?'Sending…':'Send'}</Button>
        </Stack>
      </form>
    </Container>
  )
}
