import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AppBar, Button, IconButton, Stack, TextField, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeState } from '../types';
import MenuRightMobile from './MenuRightMobile';

interface Props extends ThemeState {}

const StyledLink = styled(NextLink)`
  display: block;
  text-align: center;
  padding: 20px;
`;

const Header = ({ themeMode, handleChangeThemeMode }: Props) => {
  const [isMenuLeftOpen, setIsMenuLeftOpen] = useState(false);
  const [isMenuRightOpen, setIsMenuRightOpen] = useState(false);

  // handle open or close menu right (only mobile)
  const handleToggleMenuRight = () => {
    setIsMenuRightOpen((prev) => !prev);
  };

  // handle open or close menu left
  const handleToggleMenu = () => {
    setIsMenuLeftOpen((prev) => !prev);
  };

  return (
    <>
      {/* menu */}
      <AppBar>
        <Toolbar sx={{ height: '64px' }}>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Stack direction="row" gap={1} alignItems="center">
              {/* Icon Menu */}
              <IconButton onClick={handleToggleMenu}>
                <MenuOutlinedIcon />
              </IconButton>

              {/* LOGO */}
              <Typography
                variant="h6"
                fontWeight={600}
                letterSpacing={2}
                sx={{ '&:hover': { opacity: 0.8 } }}
              >
                <NextLink href="/">YC Shop</NextLink>
              </Typography>
            </Stack>

            {/* Search Input */}
            <TextField
              type="search"
              label="Search..."
              color="secondary"
              size="small"
              autoComplete="true"
              sx={{
                width: '40%',
                maxWidth: '350px',
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
              InputProps={{ endAdornment: <SearchOutlinedIcon /> }}
            ></TextField>

            <Stack
              direction="row"
              gap={1}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              <NextLink href="/cart">
                <Button color="secondary" startIcon={<ShoppingCartOutlinedIcon />}>
                  Cart
                </Button>
              </NextLink>

              <NextLink href="/login">
                <Button color="secondary" startIcon={<LogoutOutlinedIcon />}>
                  Login
                </Button>
              </NextLink>

              <IconButton onClick={handleChangeThemeMode}>
                {themeMode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
              </IconButton>
            </Stack>

            {/* Icon Menu on Mobile */}
            <IconButton
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
              }}
              onClick={handleToggleMenuRight}
            >
              <MoreVertOutlinedIcon />
            </IconButton>

            {/* Menu Right Mobile */}
            <MenuRightMobile
              themeMode={themeMode}
              handleChangeThemeMode={handleChangeThemeMode}
              isMenuOpen={isMenuRightOpen}
              handleToggleMenuRight={handleToggleMenuRight}
            />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Menu Toggle */}
      {/* <MenuToggle isMenuOpen={isMenuOpen} setToggleMenu={handleToggleMenu} /> */}
    </>
  );
};

export default React.memo(Header);
