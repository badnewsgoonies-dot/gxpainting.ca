import * as React from 'react';
import { Box, Button, Stack, TextField, Alert } from '@mui/material';

export default function ContactForm() {
  const [status, setStatus] = React.useState<'idle'|'ok'|'error'>('idle');

  return (
    <Box component="form"
      name="contact"
      method="POST"
      data-netlify="true"
      action="/thanks.html"
      onSubmit={() => setStatus('ok')}
    >
      {/* Required for Netlify form handling */}
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot field */}
      <p style={{ display: 'none' }}>
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <Stack spacing={2}>
        {status === 'ok' && <Alert severity="success">Thanks! We’ll get back to you promptly.</Alert>}
        {status === 'error' && <Alert severity="error">Something went wrong. Please try again.</Alert>}

        <TextField label="Name" name="name" required fullWidth />
        <TextField type="email" label="Email" name="email" required fullWidth />
        <TextField label="Phone" name="phone" fullWidth />
        <TextField label="Address / City" name="address" fullWidth />
        <TextField label="Project Details" name="message" required fullWidth multiline minRows={4} />

        <Button type="submit" variant="contained" size="large">Request Free Estimate</Button>
      </Stack>
    </Box>
  );
}
