import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface Props {
  isMenuOpen: boolean;
  setToggleMenu: VoidFunction;
}

const listMenu = [
  {
    id: '/cart',
    name: 'Cart',
  },
  {
    id: '/login',
    name: 'Login',
  },
];

const MenuToggle = ({ isMenuOpen, setToggleMenu }: Props) => {
  return (
    <Box
      component="div"
      height="100vh"
      bgcolor="whitesmoke"
      position="fixed"
      boxShadow="2px 0px 20px rgb(0, 0, 0, 0.5)"
      top={0}
      left={isMenuOpen ? '0' : '-100%'}
      zIndex={9999}
      sx={{
        //   transform: 'translateX(-30%)',
        transition: 'all ease-in-out .1s',
        width: {
          xs: '50%',
          sm: '40%',
          md: '35%',
        },
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginX="auto"
        marginTop="70px"
        component="ul"
        padding="0"
        sx={{
          listStyleType: 'none',
        }}
      >
        {listMenu.map((item) => (
          <Typography
            variant="h6"
            component="li"
            width="100%"
            textAlign="center"
            paddingY={2}
            sx={{
              '&:hover': {
                backgroundColor: '#cccccc6e',
              },
              fontSize: {
                md: '20px',
                lg: '26px',
              },
              cursor: 'pointer',
            }}
          >
            <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
              <CloseOutlinedIcon />
              <Link href={item.id}>{item.name}</Link>
            </Stack>
          </Typography>
        ))}
      </Stack>

      {/* Button Close */}
      <Box position="absolute" top="20px" right="20px">
        <IconButton size="large" onClick={setToggleMenu}>
          <CloseOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MenuToggle;
