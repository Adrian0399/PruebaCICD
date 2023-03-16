import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------


export default function Toolbar(theme: Theme) {
  return {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          boxShadow: 'none',
          minHeight: 42
        },
      },
    },
  };
}
