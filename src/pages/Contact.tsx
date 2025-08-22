
import { useState } from 'react';
const ENDPOINT = '/.netlify/functions/mail';

export default function Contact(){
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [err, setErr] = useState(''); const [hp, setHp] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault(); if (hp) return;
    const fd = new FormData(e.currentTarget);
    setStatus('sending'); setErr('');
    try {
      const payload = { name:String(fd.get('name')||''), email:String(fd.get('email')||''), details:String(fd.get('details')||''), _subject:'New lead from website', _template:'box', _captcha:'false' };
      const res = await fetch(ENDPOINT, { method:'POST', headers:{ 'Content-Type':'application/json', 'Accept':'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent'); (e.target as HTMLFormElement).reset();
    } catch(e:any){ setStatus('error'); setErr(e?.message || 'Submission failed'); }
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>

      {status==='sent' && <div className="rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 p-3">Thanks! Your message was sent. (On first use, FormSubmit will email a verification link to activate delivery.)</div>}
      {status==='error' && <div className="rounded-lg border border-red-300 bg-red-50 text-red-800 p-3">Sorry, something went wrong. {err} — You can also email us at <a className="underline" href="mailto:gxpainting@hotmail.com">gxpainting@hotmail.com</a>.</div>}

      <form className="grid md:grid-cols-2 gap-4 max-w-2xl" onSubmit={onSubmit}>
        <div className="hidden"><label>Leave this empty<input type="text" name="hp_field" tabIndex={-1} autoComplete="off" value={hp} onChange={(e)=>setHp(e.target.value)} /></label></div>
        <div><label className="text-sm">Name</label><input name="name" required className="mt-1 w-full border rounded-xl px-3 py-2" /></div>
        <div><label className="text-sm">Email</label><input name="email" type="email" required className="mt-1 w-full border rounded-xl px-3 py-2" /></div>
        <div className="md:col-span-2"><label className="text-sm">Project details</label><textarea name="details" required className="mt-1 w-full border rounded-xl px-3 py-2" rows={4}></textarea></div>
        <button disabled={status==='sending'} className="bg-emerald-600 text-white px-4 py-2 rounded-lg disabled:opacity-60">{status==='sending'?'Sending…':'Send'}</button>
      </form>

      <p className="text-sm text-slate-600">Prefer email? <a className="underline" href="mailto:gxpainting@hotmail.com">gxpainting@hotmail.com</a></p>
    </section>
  )
}
