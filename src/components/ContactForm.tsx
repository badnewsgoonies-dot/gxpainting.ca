import { Box, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending">("idle");

  return (
    <Box
      component="form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thanks.html"
      onSubmit={() => setStatus("sending")}
      sx={{ maxWidth: 560, mx: "auto" }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: "none" }}>
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <Stack spacing={2}>
        <TextField label="Name" name="name" required />
        <TextField label="Email" name="email" type="email" required />
        <TextField label="Phone" name="phone" />
        <TextField label="Message" name="message" multiline minRows={4} required />
        <Button type="submit" variant="contained" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"}
        </Button>
      </Stack>
    </Box>
  );
}
