// pages/_app.tsx
import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Create a Material-UI theme
const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2', // Example primary color
    },
    secondary: {
      main: '#dc004e', // Example secondary color
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
