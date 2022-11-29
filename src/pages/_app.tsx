import type { AppProps } from 'next/app';
import '../styles/global.css';

import { DesafioProvider } from '../contexts/DesafioContext';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <DesafioProvider>
      <Component {...pageProps} />
    </DesafioProvider>
    
  );
}
