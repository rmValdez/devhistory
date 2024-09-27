// pages/_app.tsx
import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { dark } from '../component/themes/dark';
import { light } from '../component/themes/light';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
