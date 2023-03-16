import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Tab(theme: Theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "16px",
          display: "flex",
          alignItems: "flex-end",
          textAlign: "center",
          color: "#959595",
          minWidth: "30px",
          paddingBottom: '2px',
          minHeight: '36px',

          "&.Mui-selected": {
            fontWeight: 600,
            color: theme.palette.tertiary.main,
          }
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "auto",
          height: "auto",
          padding: 0,
          margin: 0,
          "& .MuiTabs-indicator": {
            backgroundColor: theme.palette.tertiary.main,
          },
        },
        flexContainer: {
          minHeight: "auto",
          height: "auto",
          padding: 0,
          margin: 0,
        },
      },
    },
  };
}
