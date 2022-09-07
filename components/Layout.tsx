import { Stack, Box } from '@mui/material';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../theme';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: JSX.Element;
  title?: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Head>
        <title>{title ? `${title} - YC Shop` : 'YC Shop'}</title>
        <meta name="description" content="YC SHOPPPPP" />
      </Head>

      <Stack direction="column" height="100vh" justifyContent="space-between">
        <Box>
          <Header />
        </Box>

        <Box component="main" flexGrow={1} marginTop={12}>
          {children}
        </Box>

        <Box>
          <Footer />
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
