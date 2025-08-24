import { Card, CardContent, Container, Grid, Rating, Typography } from "@mui/material";

const items = [
  { name: "Sonia — King City", text: "Showed up on time, careful prep, and spotless cleanup. Would hire again.", stars: 5 },
  { name: "Arjun — North York", text: "The finish looks fantastic and they helped pick colours that actually worked.", stars: 5 },
  { name: "Nadia — Richmond Hill", text: "Quick turnaround before move‑in. Professional and friendly crew.", stars: 5 },
];

export default function Reviews() {
  return (
    <Container component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>Reviews</Typography>
      <Grid container spacing={3}>
        {items.map((r, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card variant="outlined">
              <CardContent>
                <Rating value={r.stars} readOnly size="small" />
                <Typography sx={{ mt: 1 }}>{r.text}</Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>{r.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
