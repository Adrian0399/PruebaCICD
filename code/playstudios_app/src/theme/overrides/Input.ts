import { alpha, Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Input(theme: Theme) {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: '10px',
          color: theme.palette.secondary.main,
        },
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": {
              color: theme.palette.text.disabled,
            },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
          "&:after": {
            borderBottomColor: theme.palette.text.primary,
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root.Mui-focused": {
            color: theme.palette.text.primary,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.secondary,
          "&:hover": {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.background.secondary,
            border: "1px solid #009ADF",
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        input: {
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: '16px',
          paddingTop: 16,
          color: theme.palette.secondary.main,
        },

        underline: {
          "&:before, :after": {
            display: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(theme.palette.grey[500], 0.32),
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: 1,
              borderColor: theme.palette.text.primary,
            },
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  };
}
