
import { Container, Typography, Box } from '@mui/material';

export default function Footer(){
  return (
    <Box component="footer" sx={{ borderTop:'1px solid #e2e8f0', mt:6, py:3 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} GX Painting LTD · WSIB · $5M liability · <a className="underline" href="mailto:gxpainting@hotmail.com">gxpainting@hotmail.com</a>
        </Typography>
      </Container>
    </Box>
  )
}
