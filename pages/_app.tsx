import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/nprogress.css';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => nProgress.start());
    router.events.on('routeChangeError', () => nProgress.done());
    router.events.on('routeChangeComplete', () => nProgress.done());

    return () => {};
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
