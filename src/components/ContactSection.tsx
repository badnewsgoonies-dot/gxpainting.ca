import { Container, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <Container component="section" id="contact" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Contact</Typography>
      <Typography sx={{ mb: 2, opacity: 0.8 }}>
        Tell us about your project and we’ll get back to you the same day.
      </Typography>
      <ContactForm />
    </Container>
  );
}
