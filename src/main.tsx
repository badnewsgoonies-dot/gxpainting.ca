
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from './theme'
import './index.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Process from './pages/Process'
import Reviews from './pages/Reviews'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  { element: <Layout />, children: [
    { path: '/', element: <Home /> },
    { path: '/services', element: <Services /> },
    { path: '/gallery', element: <Gallery /> },
    { path: '/process', element: <Process /> },
    { path: '/reviews', element: <Reviews /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/contact', element: <Contact /> }
  ]}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
