import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Project Gallery
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        A selection of real work by GX Painting LTD.
      </Typography>
      <Gallery />
    </Container>
  );
}
