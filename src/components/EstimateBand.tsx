import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function EstimateBand() {
  return (
    <Box component="section" id="estimate" sx={{ py: 6, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Get an instant ballpark estimate in under 60 seconds.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button variant="contained" size="large" href="#contact">Start Estimate</Button>
            <Button variant="text" size="large" href="tel:+14165608741">Or call (416) 560‑8741</Button>
          </Stack>
        </Stack>
        <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>
          No spam. Same‑day reply with a firm quote after a quick walkthrough.
        </Typography>
      </Container>
    </Box>
  );
}
