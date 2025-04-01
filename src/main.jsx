import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: [
      'kanit',
    ].join(','),
  }
})
createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
)
