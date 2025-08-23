
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#059669' },
    secondary: { main: '#0f172a' },
    background: { default: '#ffffff' }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
  },
  components: {
    MuiButton: {
      defaultProps: { variant: 'contained', disableElevation: true },
      styleOverrides: { root: { textTransform: 'none', fontWeight: 600 } }
    },
    MuiAppBar: {
      styleOverrides: { root: { background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(8px)' } }
    }
  }
});
