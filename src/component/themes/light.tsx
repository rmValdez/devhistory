import { grey } from '@mui/material/colors';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { BREAKPOINTS, TYPOGRAPHIES, UIHELPER } from './themeEnums';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];  
    tertiary: Palette['primary'];
    quaternary: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];  
    tertiary: PaletteOptions['primary'];
    quaternary: PaletteOptions['primary'];
  }
}

export const light: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#E53935' },
    secondary: { main: '#D63535' },
    tertiary: { main: '#FF6969' },
    quaternary: { main: '#DFDFDF' },
    neutral: { main: '#fff' },  
    info: { main: '#61A3E5' },
    warning: { main: '#edce2a' },
    error: { main: '#D32F2F' },
    success: { main: '#03C04A' },
    text: {
      primary: '#4E4E4E',
    },
    background: {
      default: '#F9F9F9',
      paper: '#F9F9F9',
    },
  },
  shadows: [
    'none','none','none','none','none',
    'none','none','none','none','none',
    'none','none','none','none','none',
    'none','none','none','none','none',
    'none','none','none','none','none',
  ],
  spacing: 8,
  breakpoints: {
    values: { ...BREAKPOINTS },
  },
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
            padding: '15px 0 0',
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
            backgroundColor: '',
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
});
