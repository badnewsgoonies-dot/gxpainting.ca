import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#059669' }, // emerald brand
    secondary: { main: '#2563eb' },
    background: { default: '#f5f7fb', paper: '#ffffff' },
    text: { primary: '#111827', secondary: '#374151' },
    divider: 'rgba(0,0,0,0.12)',
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: ['Inter','ui-sans-serif','system-ui','Segoe UI','Roboto','Helvetica Neue','Arial'].join(','),
    h1: { fontWeight: 800, letterSpacing: -0.5, color: '#111827' },
    h2: { fontWeight: 700, color: '#111827' },
    h3: { fontWeight: 700, color: '#111827' },
    body1: { color: '#374151' },
    body2: { color: '#4b5563' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#f5f7fb' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: '#ffffffcc', color: '#111827', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', backdropFilter: 'blur(8px)' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 8 },
        contained: { boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
      },
    },
    MuiDivider: { styleOverrides: { root: { borderColor: 'rgba(0,0,0,0.12)' } } },
    MuiLink: { styleOverrides: { root: { color: '#374151' } } },
  },
})

export default theme
