import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#059669' },
    secondary: { main: '#0f172a' },
    background: { default: '#0b1020', paper: '#0e1426' },
    text: { primary: '#e5e7eb', secondary: '#a6adbb' },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: ['Inter','ui-sans-serif','system-ui','Segoe UI','Roboto','Helvetica Neue','Arial'].join(','),
    h1: { fontWeight: 800, letterSpacing: -0.5 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiButton: { defaultProps: { disableElevation: true } },
  },
})

export default theme
