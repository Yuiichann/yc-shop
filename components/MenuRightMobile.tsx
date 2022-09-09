import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  List,
  Stack,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';
import Link from 'next/link';
import { ThemeState } from '../types';

interface Props extends ThemeState {
  isMenuOpen: boolean;
  handleToggleMenuRight: VoidFunction;
}

const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#272727' : 'whitesmoke',
}));

const MenuRightMobile = ({
  themeMode,
  handleChangeThemeMode,
  isMenuOpen,
  handleToggleMenuRight,
}: Props) => {
  return (
    <>
      <Box
        position="absolute"
        width="100%"
        height={isMenuOpen ? '250px' : '0'}
        overflow="hidden"
        left="0"
        bottom="0"
        boxShadow="0 0 20px rgb(0,0,0,0.3)"
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },
          transform: 'translateY(100%)',
          transition: 'all ease-in .2s',
        }}
      >
        <StyledStack
          width="100%"
          direction="column"
          alignItems="center"
          justifyContent="start"
          bgcolor="red"
        >
          <List
            sx={{
              width: {
                xs: '80%',
                sm: '40%',
              },
            }}
          >
            <Stack direction="row" justifyContent="center">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      color="success"
                      checked={themeMode === 'dark' ? true : false}
                      onChange={handleChangeThemeMode}
                    />
                  }
                  label="Dark Mode"
                  labelPlacement="start"
                />
              </FormGroup>
            </Stack>

            <Box component="li" marginY={2}>
              <Link href="/cart">
                <Button startIcon={<ShoppingCartOutlinedIcon />} color="secondary" fullWidth>
                  Cart
                </Button>
              </Link>
            </Box>

            <Box component="li" marginY={2}>
              <Link href="/login">
                <Button startIcon={<LogoutOutlinedIcon />} color="secondary" fullWidth>
                  Login
                </Button>
              </Link>
            </Box>

            <Stack direction="row" justifyContent="center" marginTop={4}>
              <TextField
                type="search"
                label="Search..."
                color="secondary"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: <SearchOutlinedIcon />,
                }}
              />
            </Stack>
          </List>
        </StyledStack>
      </Box>

      <Box
        display={isMenuOpen ? 'block' : 'none'}
        position="fixed"
        top="64px"
        left="0"
        width="100%"
        height="100%"
        bgcolor="rgb(0,0,0,0.3)"
        zIndex="-1"
        onClick={handleToggleMenuRight}
      ></Box>
    </>
  );
};

export default MenuRightMobile;
