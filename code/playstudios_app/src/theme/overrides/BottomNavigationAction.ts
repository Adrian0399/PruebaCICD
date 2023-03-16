import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function BottomNavigationAction(theme: Theme) {
  return {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          height: 74,
          boxShadow: "0px 0px 16px rgba(89, 89, 89, 0.2)",
        },
      },
    },
    MuiBottomNavigationAction: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            "& img": {},
          },
        },
        label: {
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "16px",

          color: "#221649",
          "&.Mui-selected": {
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "16px",
            color: "#221649",
          },
        },
      },
    },
  };
}
