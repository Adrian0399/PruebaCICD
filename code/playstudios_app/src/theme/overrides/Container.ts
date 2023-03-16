import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------


export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 18,
          paddingRight: 18
        },
      },
    },
  };
}
