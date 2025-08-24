import { AppBar, Button, Toolbar } from "@mui/material";

export default function StickyMobileCTA() {
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={3}
      sx={{
        top: "auto",
        bottom: 0,
        display: { xs: "block", md: "none" },
        bgcolor: "background.paper",
      }}
    >
      <Toolbar sx={{ gap: 1, justifyContent: "space-between" }}>
        <Button fullWidth variant="outlined" href="tel:+14165608741">
          Call
        </Button>
        <Button fullWidth variant="contained" href="#estimate">
          Instant Estimate
        </Button>
      </Toolbar>
    </AppBar>
  );
}
