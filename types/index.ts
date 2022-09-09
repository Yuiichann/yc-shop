import { PaletteMode } from '@mui/material';

export interface ThemeState {
  themeMode: PaletteMode;
  handleChangeThemeMode: VoidFunction;
}
