// src/pages/Home.tsx
import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";

const Panel = ({ id, title, children }: React.PropsWithChildren<{ id: string; title?: string }>) => (
  <Box id={id} sx={{ scrollSnapAlign: "start", py: { xs: 6, md: 10 } }}>
    <Container>
      {title && <Typography variant="h2" sx={{ mb: 3 }}>{title}</Typography>}
      {children}
    </Container>
  </Box>
);

export default function Home() {
  return (
    <Box sx={{ scrollSnapType: { xs: "none", md: "y proximity" } }}>
      <Box sx={{ scrollSnapAlign: "start" }}>
        <Hero />
      </Box>
      <Panel id="work" title="Recent Work">
        <Gallery />
      </Panel>
      <Panel id="contact" title="Get a Same‑Day Quote">
        <Stack spacing={2}>
          <Typography variant="body2" color="text.secondary">
            Tell us about the rooms, timelines, and any repairs—we’ll get back the same day.
          </Typography>
          <ContactForm />
        </Stack>
      </Panel>
    </Box>
  );
}