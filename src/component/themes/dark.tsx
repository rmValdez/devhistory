import { grey } from '@mui/material/colors';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { BREAKPOINTS, TYPOGRAPHIES, UIHELPER } from './themeEnums';

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#E53935',
    },
    secondary: {
      main: '#E06C6C',
    },
    tertiary: {
      main: '#FF6969',
    },
    quaternary: {
      main: '#fff',
    },
    info: {
      main: '#61a3e5',
    },
    warning: {
      main: '#edce2a',
    },
    error: {
      main: '#D32F2F',
    },
    success: {
      main: '#03C04A',
    },
    neutral: {
      main: '#ffffff',
    },
    text: {
      primary: '#ACACAC',
    },
    background: {
      default: '#1c2833',
      paper: '#28333d',
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      ...BREAKPOINTS,
    },
  },
  shadows: [
    'none','none','none','none','none',
    'none','none','none','none','none',
    'none','none','none','none','none',
    'none','none','none','none','none',
    'none','none','none','none','none',
  ],
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '11px',
          borderRadius: '15px',
          padding: '10px',
          margin: '0 5px 0 0',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
      },
      styleOverrides: {
        root: {
          fontSize: '0.8rem',
          borderRadius: '10px',
          textTransform: 'capitalize',
          boxShadow: 'none',
          minWidth: '80px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root': {
            borderRadius: '10px',
            minHeight: '37px',
            gap: '5px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '20px',
          borderRadius: '1rem',
          transition: '0.3s',
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        },
      },
    },
    MuiChip: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          borderRadius: '10px',
          minWidth: '80px',
          fontSize: '12px',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          '.MuiDialog-paper': {
            borderRadius: '20px',
            padding: '25px',
          },
          '.MuiDialogContent-root': {
            padding: '15px 0',
          },
          '.MuiDialogActions-root': {
            padding: '15px 0 0 0',
          },
        },
      },
    },
    MuiIcon: {
      defaultProps: {
        fontSize: 'inherit',
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '.MuiPaper-outlined': {
            borderRadius: '20px',
            padding: '40px',
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        standard: {
          width: '30px',
          height: '30px',
          borderRadius: '100%',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          maxHeight: '300px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          msOverflowStyle: '-ms-autohiding-scrollbar',
          '--scrollbarBG': 'transparent',
          '--thumbBG': grey[500],
        },
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--thumbBG) var(--scrollbarBG)',
        },
        '*::-webkit-scrollbar-track': {
          background: 'var(--scrollbarBG)',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'var(--thumbBG)',
          borderRadius: '6px',
          border: '3px solid #000',
        },
        '*::-webkit-scrollbar-corner': {
          background: 'transparent',
        },
        '*::-webkit-scrollbar': {
          width: '11px',
          height: '11px',
        },
      },
    },
  },
};

export const dark = createTheme(darkThemeOptions);
