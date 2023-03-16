import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export type ColorSchema =
  | "primary"
  | "secondary"
  | "tertiary"
  | "info"
  | "success"
  | "warning"
  | "error";


declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
    secondary: string;
    tertiary: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
    tertiary: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    tertiary: string;
  }
  interface PaletteOptions {
    tertiary: PaletteColorOptions;
  }

  //mui add text variant
  interface TypeText {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    hint: string;
  
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  lighter: "#C8FACD",
  light: "#5BE584",
  main: "#2B2B2B",
  dark: "#007B55",
  darker: "#005249",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#696A93",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const TERTIARY = {
  lighter: "#D6E4FF",
  light: "#FFF4E8",
  main: "#FFA133",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#696A93",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#fff",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#fff",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  tertiary: TERTIARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode: "light" | "dark") {
  const light = {
    ...COMMON,
    mode: "light",
    text: {
      primary: "#2B2B2B",
      secondary: "#696A93",
      tertiary: "#FFA133",
      disabled: GREY[500],
    },
    background: { secondary: '#F6F6FB',paper: "#fff", default: "#fff", neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  } as const;

  const dark = {
    ...COMMON,
    mode: "dark",
    text: {
      primary: "#fff",
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      secondary: "#F6F6FB",
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  } as const;

  return themeMode === "light" ? light : dark;
}
