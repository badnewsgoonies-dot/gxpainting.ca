import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 14 },
        color: "white",
        background:
          "radial-gradient(1200px 600px at 10% -10%, #1e3a8a 0%, rgba(30,58,138,0) 60%), radial-gradient(800px 400px at 100% 0%, #0ea5e9 0%, rgba(14,165,233,0) 60%), linear-gradient(180deg,#0b0e14,#0b0e14)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 880 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>
            Since 1999 · WSIB · $5M Liability
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 800, lineHeight: 1.1, fontSize: { xs: 36, md: 54 } }}
          >
            GTA Painters Who Show Up, Finish Clean, and Stand Behind It
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 760 }}>
            Interior & exterior painting across the GTA. Professional prep, premium paints,
            tidy job sites, and a clear warranty—so your place looks right the first time.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
            <Button variant="contained" size="large" href="#estimate" sx={{ px: 3 }}>
              Get Instant Estimate
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#contact"
              sx={{ px: 3, borderColor: "rgba(255,255,255,0.5)", color: "white" }}
            >
              Book a Free Visit
            </Button>
          </Stack>

          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Same‑day replies · WSIB‑covered · Warranty included
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
