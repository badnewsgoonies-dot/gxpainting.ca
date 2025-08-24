import { Container, Grid, Typography } from "@mui/material";
import BeforeAfterSlider from "./BeforeAfterSlider";

const demo = [
  {
    before: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1600&q=60",
    after: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1600&q=60",
    caption: "Living room repaint — Regal Select Eggshell on walls, Ultra Spec Primer",
  },
  {
    before: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=60",
    after: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=60",
    caption: "Kitchen refresh — Scuff‑X for durability on high‑traffic surfaces",
  },
  {
    before: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=60",
    after: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2f01?auto=format&fit=crop&w=1600&q=60",
    caption: "Exterior trim — Aura Exterior Satin, 2 coats over primer",
  },
];

export default function Gallery() {
  return (
    <Container component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
        Recent Work
      </Typography>
      <Grid container spacing={3}>
        {demo.map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <BeforeAfterSlider before={item.before} after={item.after} caption={item.caption} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
