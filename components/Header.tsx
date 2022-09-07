import React, { useState } from 'react';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import Link from 'next/link';
import styled from 'styled-components';
import MenuToggle from './MenuToggle';

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 20px;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
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
              <Link href="/">YC Shop</Link>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Menu Toggle */}
      <MenuToggle isMenuOpen={isMenuOpen} setToggleMenu={handleToggleMenu} />
    </>
  );
};

export default React.memo(Header);
