import { ButtonProps } from "@mui/material";
import { alpha, Theme } from "@mui/material/styles";


import iconArrowLeft from 'assets/icon-arrow-left.svg';

// ----------------------------------------------------------------------

const COLORS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

// NEW VARIANT
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    soft: true;
    reward: true;
    rewardCollection: true;
    primary: true;
    secondary: true;
    information: true;
    cancel: true;
  }


}

export default function Button(theme: Theme) {
  const isLight = theme.palette.mode === "light";

  const rootStyle = (ownerState: ButtonProps) => {

    const cancelVariant = ownerState.variant === "cancel";

    const informationVariant = ownerState.variant === "information";

    const rewardVariant = ownerState.variant === "reward";

    const rewardCollectionVariant = ownerState.variant === "rewardCollection";

    const primaryVariant = ownerState.variant === "primary";

    const secondaryVariant = ownerState.variant === "secondary";

    const inheritColor = ownerState.color === "inherit";

    const containedVariant = ownerState.variant === "contained";

    const outlinedVariant = ownerState.variant === "outlined";

    const textVariant = ownerState.variant === "text";

    const softVariant = ownerState.variant === "soft";

    const smallSize = ownerState.size === "small";

    const largeSize = ownerState.size === "large";

    const defaultStyle = {

      // INFORMATION
      ...(informationVariant && {
       
        background: '#F6F6FB',
        /* Shadows/Buttons */
        borderRadius: '6px',
        paddingTop: '7px',
        paddingBottom: '7px',
        minHeight: '34px',

        "&:hover": {
          backgroundColor: '#D9DAE4',
        },

        "&:active": {
          backgroundColor: '#D9DAE4',
        },

        
      }),

      // REWARD
      ...(rewardVariant && {
        color: theme.palette.tertiary.main,
        borderTop: '1px solid #D8D8D8',
        borderBottom: '1px solid #D8D8D8',

        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '20px',
        justifyContent: 'left',
        padding: '16px 0px',
        textAlign: 'left',
        borderRadius: '0px',
        "&:after": {
          content: '""',
          display: 'block',
          backgroundImage: 'url(' + iconArrowLeft + ')',
          backgroundRepeat: 'no-repeat',
          width: '5px',
          height: '10px',
          float: 'left',
          position: 'absolute',
          right: '8px',
        },

        "&:hover": {
          backgroundColor: '#FFF4E8',
        },

        "&:active": {
          backgroundColor: '#FFF4E8',
        },

        
      }),

      ...(rewardCollectionVariant && {
        color: theme.palette.tertiary.main,
        borderBottom: '1px solid #D8D8D8',

        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '20px',
        justifyContent: 'left',
        padding: '16px 0px',
        textAlign: 'left',
        borderRadius: '0px',
        "&:after": {
          content: '""',
          display: 'block',
          backgroundImage: 'url(' + iconArrowLeft + ')',
          backgroundRepeat: 'no-repeat',
          width: '5px',
          height: '10px',
          float: 'left',
          position: 'absolute',
          right: '8px',
        },

        "&:hover": {
          backgroundColor: '#FFF4E8',
        },

        "&:active": {
          backgroundColor: '#FFF4E8',
        },

        
      }),

      ...(primaryVariant && {
        color: 'white',
        background: 'linear-gradient(90deg, #FF7A4A 0%, #FFB16B 100%)',
        /* Shadows/Buttons */
        boxShadow: '0px 0px 16px rgba(64, 64, 64, 0.14)',
        borderRadius: '6px',
        paddingTop: '13px',
        paddingBottom: '13px',

        "&:hover": {
          background: 'linear-gradient(90deg, #EC7246 0%, #EAA262 100%);',
        },

        "&:active": {
          background: 'linear-gradient(90deg, #EC7246 0%, #EAA262 100%);',
        },

        "&.Mui-disabled": {
          opacity: '.5',
          color: 'white',
          backgroundColor: 'linear-gradient(90deg, #EC7246 0%, #EAA262 100%);',
        },

        
      }),

      ...(secondaryVariant && {
        color: '#696A93',
        border: '1px solid #696A93',
        borderRadius: '6px',
        paddingTop: '13px',
        paddingBottom: '13px',

        "&:hover": {
          background: '#F6F6FB',
        },

        "&:active": {
          background: '#F6F6FB',
        },

        
      }),


      ...(cancelVariant && {
        color: 'white',
        background: 'linear-gradient(90deg, #CD2026 0%, #FA7579 100%)',
        /* Shadows/Buttons */
        boxShadow: '0px 0px 16px rgba(64, 64, 64, 0.14)',
        borderRadius: '6px',
        paddingTop: '9px',
        paddingBottom: '9px',

        "&:hover": {
          background: 'linear-gradient(90deg, #AB1419 0%, #EF4046 100%);',
        },

        "&:active": {
          background: 'linear-gradient(90deg, #AB1419 0%, #EF4046 100%);',
        },

        "&.Mui-disabled": {
          opacity: '.5',
          color: 'white',
          background: 'linear-gradient(90deg, #CD2026 0%, #FA7579 100%)',
        },

        
      }),


      // OUTLINED
      ...(outlinedVariant && {
        borderColor: theme.palette.tertiary.main,
        background: '#FFFFFF',
        color: theme.palette.tertiary.main,
        /* Shadows/Buttons */
        borderRadius: '6px',
        paddingTop: '9px',
        paddingBottom: '9px',

        "&:hover": {
          background: '#FFF4E8',
          borderColor: theme.palette.tertiary.main,
        },

        "&:active": {
          background: '#FFF4E8',
          borderColor: theme.palette.tertiary.main,
        },

      }),


      ...(inheritColor && {

        // CONTAINED
        ...(containedVariant && {
          color: theme.palette.grey[800],
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        }),
        
        // TEXT
        ...(textVariant && {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette.text.primary,
          backgroundColor: alpha(theme.palette.grey[500], 0.08),
          "&:hover": {
            backgroundColor: alpha(theme.palette.grey[500], 0.24),
          },
        }),
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        // CONTAINED
        ...(containedVariant && {
          "&:hover": {},
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette[color][isLight ? "dark" : "light"],
          backgroundColor: alpha(theme.palette[color].main, 0.16),
          "&:hover": {
            backgroundColor: alpha(theme.palette[color].main, 0.32),
          },
        }),
      }),
    }));

    const disabledState = {
      "&.Mui-disabled": {
        // SOFT
        ...(softVariant && {
          backgroundColor: theme.palette.action.disabledBackground,
        }),
      },
    };

    const size = {
      ...(smallSize && {
        height: 30,
        fontSize: 13,
        ...(softVariant && {
          padding: "4px 10px",
        }),
      }),
      ...(largeSize && {
        height: 48,
        fontSize: 15,
        ...(softVariant && {
          padding: "8px 22px",
        }),
      }),
    };

    return [...colorStyle, defaultStyle, disabledState, size];
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) =>
          rootStyle(ownerState),
      },
    },
  };
}
