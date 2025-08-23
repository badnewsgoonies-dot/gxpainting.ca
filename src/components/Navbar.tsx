
import { AppBar, Toolbar, Container, Box, Button, Link as MuiLink } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
  ({ color: isActive ? '#059669' : '#0f172a', fontWeight: isActive ? 600 : 500, textDecoration: 'none' });

export default function Navbar(){
  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
          <MuiLink component={Link} to="/" underline="none" sx={{ display:'flex', alignItems:'center', gap:1.25, fontWeight:700, color:'inherit' }}>
            <img src="/logo-bold.svg" alt="GX logo" width={36} height={36} />
            GX Painting LTD
          </MuiLink>

          <Box sx={{ display: { xs:'none', md:'flex' }, gap: 3 }}>
            <MuiLink component={NavLink} to="/services" style={navLinkStyles}>Services</MuiLink>
            <MuiLink component={NavLink} to="/gallery"  style={navLinkStyles}>Gallery</MuiLink>
            <MuiLink component={NavLink} to="/process"  style={navLinkStyles}>Process</MuiLink>
            <MuiLink component={NavLink} to="/reviews"  style={navLinkStyles}>Reviews</MuiLink>
            <MuiLink component={NavLink} to="/faq"      style={navLinkStyles}>FAQ</MuiLink>
            <MuiLink component={NavLink} to="/contact"  style={navLinkStyles}>Contact</MuiLink>
          </Box>

          <Button component={Link} to="/contact" size="medium" color="primary" variant="contained">
            Free Quote
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
