// ----------------------------------------------------------------------

declare module "@mui/material/styles" {
  interface TypographyVariants {
    
    //figma fonts / intentar usar solo estas para todo el desarrollo
    H1_B: React.CSSProperties;
    H2_SBP: React.CSSProperties;
    H2_R: React.CSSProperties;
    H3_B: React.CSSProperties;
    H3_SB: React.CSSProperties;
    H3_M: React.CSSProperties;
    H3_R: React.CSSProperties;
    H4_B: React.CSSProperties;
    H4_R: React.CSSProperties;
    H5_R: React.CSSProperties;
    button: React.CSSProperties;
    large: React.CSSProperties;
    default: React.CSSProperties;
    small: React.CSSProperties;
    H4_5: React.CSSProperties;

    R: React.CSSProperties;
    M: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
  
    //figma fonts / intentar usar solo estas para todo el desarrollo
    H1_B: React.CSSProperties;
    H2_SBP: React.CSSProperties;
    H2_R: React.CSSProperties;
    H3_B: React.CSSProperties;
    H3_SB: React.CSSProperties;
    H3_M: React.CSSProperties;
    H3_R: React.CSSProperties;
    H4_B: React.CSSProperties;
    H4_R: React.CSSProperties;
    H5_R: React.CSSProperties;
    button: React.CSSProperties;
    large: React.CSSProperties;
    default: React.CSSProperties;
    small: React.CSSProperties;
    H4_5: React.CSSProperties;

    R: React.CSSProperties;
    M: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
   
    //figma fonts / intentar usar solo estas para todo el desarrollo
    H1_B: true;
    H2_SBP: true;
    H2_R: true;
    H3_B: true;
    H3_SB: true;
    H3_M: true;
    H3_R: true;
    H4_B: true;
    H4_R: true;
    H5_R: true;
    button: true;
    large: true;
    default: true;
    small: true;
    H4_5: true;
    R: true;
    M: true;
  }
}

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = "Montserrat, Public Sans, sans-serif"; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  color: "#2B2B2B",


  H1_B: {
    fontWeight: 700,
    fontSize: pxToRem(24),
    lineHeight: pxToRem(32),
  },

  H2_SBP: {
    fontWeight: 600,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
  },
  H2_R: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
  },
  H3_B: {
    fontWeight: 700,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  H3_SB: {
    fontWeight: 600,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  H3_M: {
    fontWeight: 500,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  H3_R: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  H4_B: {
    fontWeight: 700,
    fontSize: pxToRem(11),
    lineHeight: pxToRem(14),
  },
  H4_R: {
    fontWeight: 400,
    fontSize: pxToRem(11),
    lineHeight: pxToRem(14),
  },
  H4_5: {
    fontWeight: 400,
    fontSize: pxToRem(10),
    lineHeight: pxToRem(12),
  },
  H5_R: {
    fontWeight: 400,
    fontSize: pxToRem(9),
    lineHeight: pxToRem(14),
  },

  R: {
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
  },
  M: {
    fontWeight: 500,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },

  button: {
    fontWeight: 600,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(22),
    textTransform: "none",
  },

  large: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
  },
  default: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  small: {
    fontWeight: 600,
    fontSize: pxToRem(11),
    lineHeight: pxToRem(14),
  },



  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },

} as const;

export default typography;
