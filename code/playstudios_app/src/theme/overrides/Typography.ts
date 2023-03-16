import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

import MontserratThin from 'assets/fonts/Montserrat-Thin.woff2';
import MontserratExtraLight from 'assets/fonts/Montserrat-ExtraLight.woff2';
import MontserratLight from 'assets/fonts/Montserrat-Light.woff2';
import MontserratRegular from 'assets/fonts/Montserrat-Regular.woff2';
import MontserratMedium from 'assets/fonts/Montserrat-Medium.woff2';

import MontserratSemiBold from 'assets/fonts/Montserrat-SemiBold.woff2';
import MontserratBold from 'assets/fonts/Montserrat-Bold.woff2';
import MontserratExtraBold from 'assets/fonts/Montserrat-ExtraBold.woff2';
import MontserratBlack from 'assets/fonts/Montserrat-Black.woff2';





export default function Typography(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Montserrat";
          src: url(${MontserratThin}}) format("woff2");
          font-style: normal;
          font-weight: 100;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Montserrat";
          src: url(${MontserratExtraLight}) format("woff2");
          font-style: normal;
          font-weight: 200;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Montserrat";
          src: url(${MontserratLight}) format("woff2");
          font-style: normal;
          font-weight: 300;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Montserrat";
          src: url(${MontserratRegular}) format("woff2");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Montserrat";
          src: url(${MontserratMedium}) format("woff2");
          font-style: normal;
          font-weight: 500;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Montserrat";
          src: url(${MontserratSemiBold}) format("woff2");
          font-style: normal;
          font-weight: 600;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Montserrat";
          src: url(${MontserratBold}) format("woff2");
          font-style: normal;
          font-weight: 700;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Montserrat";
          src: url(${MontserratExtraBold}) format("woff2");
          font-style: normal;
          font-weight: 800;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Montserrat";
          src: url(${MontserratBlack}) format("woff2");
          font-style: normal;
          font-weight: 900;
          font-display: swap;
        }
      `,
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
