// src/layout/SiteHeader.tsx
import * as React from "react";
import { AppBar, Toolbar, Container, Stack, Button, useScrollTrigger } from "@mui/material";

const SECTIONS = [
  { id: "work", label: "Our Work" },
  { id: "contact", label: "Contact" },
];

export default function SiteHeader() {
  const [active, setActive] = React.useState<string>("");
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.6] });

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <AppBar position="sticky" color="default" elevation={trigger ? 2 : 0}>
      <Toolbar>
        <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <a href="/" style={{ fontWeight: 800, textDecoration: "none", color: "inherit" }}>GX Painting LTD</a>
          <Stack direction="row" spacing={1} sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
            {SECTIONS.map(s => (
              <Button
                key={s.id}
                href={`#${s.id}`}
                variant={active === s.id ? "contained" : "text"}
                size="small"
              >
                {s.label}
              </Button>
            ))}
            <Button href="#contact" variant="contained" size="small">Get a Quote</Button>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}