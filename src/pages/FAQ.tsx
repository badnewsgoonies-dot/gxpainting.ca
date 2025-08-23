
import { Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ(){
  return (
    <Container maxWidth="lg" sx={{ py:6 }}>
      <Typography variant="h4" sx={{ mb:2 }}>FAQ</Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How fast can I get a quote?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Same day in most cases after a brief call or photos.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do you offer a warranty?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Yes—2-year workmanship warranty on interior and exterior projects.
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
