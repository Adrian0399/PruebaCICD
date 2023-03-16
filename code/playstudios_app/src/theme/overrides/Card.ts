import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------


export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          backgroundImage: 'none',
          color: '#222 !important',
          boxShadow: '0px 0px 8px rgba(89, 89, 89, 0.45)',
          marginTop: '8px',
          marginBottom: '8px',
        },
      },
    },
  };
}
