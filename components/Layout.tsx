import { Box, PaletteMode, Stack, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '../theme';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: JSX.Element;
  title?: string;
}

const StyledMain = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#333333',
  color: theme.palette.mode === 'light' ? 'dark' : 'white',
}));

const Layout = ({ children, title }: Props) => {
  // theme State
  const [themeMode, setThemeMode] = useState<PaletteMode>(() => {
    let theme: PaletteMode;

    if (typeof window !== 'undefined') {
      return (localStorage.getItem('__theme') as PaletteMode) || 'light';
    } else {
      return 'light';
    }
  });

  // handle Click change mode theme
  const handleChangeThemeMode = useCallback(() => {
    setThemeMode((prev) => {
      const theme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('__theme', theme);
      return theme;
    });
  }, []);

  // handle check theme in local storgae
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const theme: PaletteMode = (localStorage.getItem('__theme') as PaletteMode) ?? 'light';

  //     setThemeMode(theme);
  //   }
  // }, []);

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <Head>
        <title>{title ? `${title} - YC Shop` : 'YC Shop'}</title>
        <meta name="description" content="YC SHOPPPPP" />
      </Head>

      <Stack direction="column" height="100vh" justifyContent="space-between">
        <Box>
          <Header themeMode={themeMode} handleChangeThemeMode={handleChangeThemeMode} />
        </Box>

        <StyledMain component="main" flexGrow={1} paddingY={4} marginTop="64px">
          {children}
        </StyledMain>

        <StyledMain>
          <Footer />
        </StyledMain>
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
