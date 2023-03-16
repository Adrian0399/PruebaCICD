import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------


export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'white', 
          color: '#222',
          boxShadow: '0px 0px 15.4px rgba(102, 102, 102, 0.3)',
        },
      },
    },
  };
}
