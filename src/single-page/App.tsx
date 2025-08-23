// File: src/single-page/App.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AppBar, Box, Button, Chip, Container, Divider, IconButton, Link, Paper, Stack, Toolbar, Typography } from '@mui/material'
import { CheckCircle2, ChevronDown, Phone, Star, Send, Menu as MenuIcon } from 'lucide-react'

type SectionKey = 'hero' | 'services' | 'gallery' | 'process' | 'reviews' | 'faq' | 'contact'

const SECTION_ORDER: SectionKey[] = ['hero','services','gallery','process','reviews','faq','contact']

function useInfiniteSections(total: number) {
  const [visible, setVisible] = useState(1)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setVisible((v) => Math.min(v + 1, total))
      }
    }, { rootMargin: '200px 0px 400px 0px', threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [total])

  return { visible, sentinelRef, setVisible }
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#ffffffcc', backdropFilter: 'blur(8px)' }}>
      <Toolbar sx={{ gap: 2 }}> 
        <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary' }}>GX Painting</Typography>
        <Box sx={{ flex: 1 }} />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ display: { xs: open ? 'flex' : 'none', sm: 'flex' } }}>
          {SECTION_ORDER.map((id) => (
            <Link key={id} href={`#${id}`} underline="none" color="text.secondary" sx={{ '&:hover': { color: 'text.primary' } }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </Stack>
        <Button href="#contact" variant="contained" startIcon={<Phone size={18} />} sx={{ ml: 1 }}>Free Estimate</Button>
        <IconButton onClick={() => setOpen((v) => !v)} sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

function Hero() {
  return (
    <Box id="hero" sx={{ position: 'relative', overflow: 'hidden', py: { xs: 10, md: 16 }, backgroundColor: '#f9fafb' }}>
      <Container>
        <Stack spacing={3} alignItems="start">
          <Chip label="Trusted • Fast • Clean" variant="outlined" />
          <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 60 }, lineHeight: 1.05, color: 'text.primary' }}>
            Beautiful finishes, <Box component="span" sx={{ color: 'primary.main' }}>zero hassle</Box>.
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 760 }}>
            Interior & exterior residential painting in GTA. Clear pricing, tidy crews, and a finish you’ll love.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button href="#contact" size="large" variant="contained" startIcon={<Send size={18} />}>Get my estimate</Button>
            <Button href="#gallery" size="large" variant="outlined">See our work</Button>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} />)}
            <Typography variant="body2" color="text.secondary">4.9/5 from 250+ Toronto homeowners</Typography>
          </Stack>
        </Stack>
      </Container>
      <ScrollHint />
    </Box>
  )
}

function Services() {
  const items = [
    { title: 'Interior Painting', desc: 'Walls, ceilings, trim, doors, accent walls.' },
    { title: 'Exterior Painting', desc: 'Siding, stucco, brick, fences, decks.' },
    { title: 'Cabinet Refinishing', desc: 'Factory-like finishes for kitchens & built-ins.' },
    { title: 'Drywall & Repairs', desc: 'Patching, sanding, caulking, surface prep.' },
    { title: 'Colour Consultation', desc: 'Certified colour experts & samples.' },
    { title: 'Commercial', desc: 'Off-hours scheduling to minimize downtime.' },
  ]
  return (
    <Section id="services" title="Services" subtitle="Everything you need, done right">
      <Stack direction="row" useFlexGap flexWrap="wrap" spacing={2}>
        {items.map((it) => (
          <Paper key={it.title} sx={{ p: 3, flex: '1 1 280px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>{it.title}</Typography>
            <Typography variant="body2" color="text.secondary">{it.desc}</Typography>
          </Paper>
        ))}
      </Stack>
    </Section>
  )
}

function Gallery() {
  const imgs = Array.from({ length: 12 }).map((_, i) => `/gallery/${(i%6)+1}.jpg`)
  return (
    <Section id="gallery" title="Recent Work" subtitle="Before & afters that speak for themselves">
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(3,1fr)' },
        gap: 1.5,
      }}>
        {imgs.map((src, i) => (
          <Paper key={i} sx={{ overflow: 'hidden', aspectRatio: '1/1', position: 'relative' }}>
            <img src={src} alt="Project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Paper>
        ))}
      </Box>
    </Section>
  )
}

function Process() {
  const steps = [
    { k: '1', t: 'Quote', d: 'Transparent, itemized pricing.' },
    { k: '2', t: 'Prep', d: 'Protection, repairs, and surface prep.' },
    { k: '3', t: 'Paint', d: 'Premium coatings, pro application.' },
    { k: '4', t: 'Clean', d: 'Daily tidy & final walkthrough.' },
    { k: '5', t: 'Support', d: '2-year workmanship warranty.' },
  ]
  return (
    <Section id="process" title="Our Process" subtitle="Smooth from first call to final coat">
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        {steps.map((s) => (
          <Paper key={s.k} sx={{ p: 3, flex: 1, border: '1px solid rgba(0,0,0,0.08)' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <CheckCircle2 />
              <Typography variant="h6">{s.t}</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">{s.d}</Typography>
          </Paper>
        ))}
      </Stack>
    </Section>
  )
}

function Reviews() {
  const reviews = [
    { n: 'Alex P. • North York', t: 'Flawless finish, zero mess. Crew was on time and professional.' },
    { n: 'Priya K. • Etobicoke', t: 'Estimate on Friday, job done by Tuesday. Loved the colour help!' },
    { n: 'Jordan L. • Scarborough', t: 'Protected everything and the result is stunning. Highly recommend.' },
  ]
  return (
    <Section id="reviews" title="Happy customers" subtitle="Homeowners rate us 4.9/5">
      <Stack spacing={2}>
        {reviews.map((r, i) => (
          <Paper key={i} sx={{ p: 3, border: '1px solid rgba(0,0,0,0.08)' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
              {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} />)}
              <Typography variant="body2" color="text.secondary">Verified</Typography>
            </Stack>
            <Typography sx={{ mb: 1 }}>{r.t}</Typography>
            <Typography variant="body2" color="text.secondary">{r.n}</Typography>
          </Paper>
        ))}
      </Stack>
    </Section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'How fast can you start?', a: 'Most projects start within 7–10 days. Smaller jobs may be scheduled sooner.' },
    { q: 'Do you help with colours?', a: 'Yes – we include basic colour support and offer full consultations if needed.' },
    { q: 'Are you insured?', a: 'Fully insured and WSIB compliant. Certificate available upon request.' },
  ]
  return (
    <Section id="faq" title="FAQ" subtitle="Answers to common questions">
      <Stack spacing={1.5}>
        {faqs.map((f) => (
          <Paper key={f.q} sx={{ p: 2.5, border: '1px solid rgba(0,0,0,0.08)' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{f.q}</Typography>
            <Typography variant="body2" color="text.secondary">{f.a}</Typography>
          </Paper>
        ))}
      </Stack>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Get your free estimate" subtitle="Tell us about your project">
      <Paper component="form" action="/.netlify/functions/mail" method="POST" sx={{ p: 3, display: 'grid', gap: 2, border: '1px solid rgba(0,0,0,0.08)' }}>
        <input type="hidden" name="_honeypot" value="" />
        <input type="hidden" name="_subject" value="New estimate request" />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Input name="name" label="Full name" required />
          <Input name="phone" label="Phone" required />
        </Stack>
        <Input name="email" label="Email" required />
        <Input name="address" label="Address / City" />
        <Input name="details" label="Project details" multiline rows={4} required />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button type="submit" variant="contained" startIcon={<Send size={18} />}>Request estimate</Button>
          <Button href="tel:+14165551234" variant="outlined" startIcon={<Phone size={18} />}>Call (416) 555-1234</Button>
        </Stack>
        <Typography variant="caption" color="text.secondary">By submitting, you agree to be contacted about your project.</Typography>
      </Paper>
    </Section>
  )
}

function Input(props: any) {
  return (
    <Box sx={{ display: 'grid', gap: 0.5, width: '100%' }}>
      <Typography variant="caption" color="text.secondary">{props.label}</Typography>
      <Box component="input" {...props} className="rounded-xl" sx={{
        bgcolor: '#fff',
        border: '1px solid rgba(0,0,0,0.1)',
        px: 2, py: 1.25,
        color: 'text.primary',
        '&:focus': { outline: '2px solid', outlineColor: 'primary.main' }
      }} />
    </Box>
  )
}

function Footer() {
  return (
    <Container sx={{ py: 6 }}>
      <Divider sx={{ mb: 3, opacity: 0.12 }} />
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'start', sm: 'center' }}>
        <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} GX Painting. All rights reserved.</Typography>
        <Stack direction="row" spacing={2}>
          <Link href="#services" color="text.secondary">Services</Link>
          <Link href="#reviews" color="text.secondary">Reviews</Link>
          <Link href="#contact" color="text.secondary">Contact</Link>
        </Stack>
      </Stack>
    </Container>
  )
}

function StickyCTA() {
  return (
    <Paper elevation={3} sx={{ position: 'fixed', bottom: 16, left: 0, right: 0, mx: 'auto', maxWidth: 980, p: 1.5, display: 'flex', gap: 1, alignItems: 'center', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: '#ffffffee', backdropFilter: 'blur(6px)' }}>
      <Typography sx={{ flex: 1 }}>Ready to love your walls?</Typography>
      <Button href="#contact" variant="contained">Get Estimate</Button>
      <Button href="tel:+14165551234" variant="outlined" startIcon={<Phone size={18} />}>Call</Button>
    </Paper>
  )
}

function Section({ id, title, subtitle, children }: { id: string, title: string, subtitle?: string, children: React.ReactNode }) {
  return (
    <Box id={id} sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f9fafb' }}>
      <Container>
        <Stack spacing={3} sx={{ mb: 4 }}>
          <Typography variant="h3">{title}</Typography>
          {subtitle && <Typography color="text.secondary">{subtitle}</Typography>}
        </Stack>
        {children}
      </Container>
    </Box>
  )
}

function ScrollHint() {
  return (
    <Stack alignItems="center" sx={{ pt: 8 }}>
      <ChevronDown />
      <Typography variant="caption" color="text.secondary">Scroll to explore</Typography>
    </Stack>
  )
}

export default function App() {
  const sections = useMemo(() => ({
    hero: <Hero />, services: <Services />, gallery: <Gallery />, process: <Process />, reviews: <Reviews />, faq: <FAQ />, contact: <Contact />
  }), [])
  const { visible, sentinelRef } = useInfiniteSections(SECTION_ORDER.length)

  return (
    <Box>
      <Nav />
      {SECTION_ORDER.slice(0, visible).map((k) => (
        <React.Fragment key={k}>{sections[k]}</React.Fragment>
      ))}
      <div ref={sentinelRef} />
      <Footer />
      <StickyCTA />
    </Box>
  )
}
