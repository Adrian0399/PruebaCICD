import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------


export default function CardContent(theme: Theme) {
  return {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '9px',
        },
      },
    },
  };
}
