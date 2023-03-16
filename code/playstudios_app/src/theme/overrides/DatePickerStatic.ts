import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------


export default function DatePickerStatic(theme: Theme) {
  return {
    MuiCalendarOrClockPicker: {
      styleOverrides: {
        root: {
          '> div' : {
            width: '100%',
          },
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          paddingLeft: 19,
          paddingRight: 19
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          width: 'calc(100% / 7)',
          height: 'calc(90vw / 7)',
          fontSize: 14,
          lineHeight: 32,
          color: '#2B2B2B',
          
        },
      },
    },

    MuiDayPicker: {
      styleOverrides: {
        weekDayLabel: {
          width: 'calc(100% / 7)',
          height: 'calc(90vw / 7)',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 17,
          color: '#2B2B2B',
        },
        slideTransition : {
          width: '100%',
          minHeight: 270,
        }
      },
    },

  };
}
