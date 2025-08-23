
import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';

const HOME_FEATURED = [
  { src: `/gx-2.webp`,  alt: `Featured project 2`,  width: 1600, height: 1200 },
  { src: `/gx-5.webp`,  alt: `Featured project 5`,  width: 1600, height: 1200 },
  { src: `/gx-6.webp`,  alt: `Featured project 6`,  width: 1600, height: 1200 },
];

export default function Home(){
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ display:'flex', flexDirection:'column', gap:2 }}>
            <img src="/logo-lockup.svg" alt="GX Painting LTD" style={{ height:56 }} />
            <Typography variant="h5" component="h2">Interior • Exterior • Staining • Commercial</Typography>
            <Typography>Professional painters serving the GTA since 1999. Clean prep, premium products, and a 2-year workmanship warranty.</Typography>
            <Button href="/contact" variant="contained" color="primary">Get a Free Quote</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1.5}>
            <Grid item xs={6}>
              <img src={HOME_FEATURED[0].src} alt={HOME_FEATURED[0].alt} width={HOME_FEATURED[0].width} height={HOME_FEATURED[0].height} loading="lazy" decoding="async" style={{ width:'100%', height:160, objectFit:'cover', borderRadius:12 }} />
            </Grid>
            <Grid item xs={6}>
              <img src={HOME_FEATURED[1].src} alt={HOME_FEATURED[1].alt} width={HOME_FEATURED[1].width} height={HOME_FEATURED[1].height} loading="lazy" decoding="async" style={{ width:'100%', height:220, objectFit:'cover', borderRadius:12 }} />
            </Grid>
            <Grid item xs={12}>
              <img src={HOME_FEATURED[2].src} alt={HOME_FEATURED[2].alt} width={HOME_FEATURED[2].width} height={HOME_FEATURED[2].height} loading="lazy" decoding="async" style={{ width:'100%', height:200, objectFit:'cover', borderRadius:12 }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" component="h3">Meet the Owner</Typography>
          <Typography sx={{ mt: 1.5 }}>
            Gaz founded GX Painting LTD in 1999 and brings 25 years of hands-on experience to homes and businesses across the GTA.
            Expect careful prep, crisp lines, tidy job sites, and clear communication from start to finish.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600}>Quick facts</Typography>
              <Box sx={{ mt:1, display:'grid', rowGap:0.5, fontSize:14 }}>
                <Box sx={{ display:'flex', justifyContent:'space-between' }}><span>Owner</span><span>Gaz</span></Box>
                <Box sx={{ display:'flex', justifyContent:'space-between' }}><span>Since</span><span>1999</span></Box>
                <Box sx={{ display:'flex', justifyContent:'space-between' }}><span>Experience</span><span>25 years</span></Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
