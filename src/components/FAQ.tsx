import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  return (
    <Container component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>FAQ</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Do you move furniture and handle prep?
        </AccordionSummary>
        <AccordionDetails>
          Yes. We handle light moving, cover and mask thoroughly, sand/fill prime as needed, and leave the space tidy.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          What paints do you recommend?
        </AccordionSummary>
        <AccordionDetails>
          Benjamin Moore Regal Select, Scuff‑X for high‑traffic areas, and Aura for exterior. We’ll match to your needs.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Are you insured and WSIB‑covered?
        </AccordionSummary>
        <AccordionDetails>
          Yes—full liability coverage and WSIB. Proof available on request.
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
