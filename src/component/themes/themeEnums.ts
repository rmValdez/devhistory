// Define interfaces for the theme enums
interface Breakpoints {
  xs: number;  // Extra small devices
  sm: number;  // Small devices
  md: number;  // Medium devices
  lg: number;  // Large devices
  xl: number;  // Extra large devices
}

interface UIHelper {
  topBarHeight: string;
  drawerWidth: string;
  drawerWidthOpen: string;
  baseBg: string;
}

interface Typography {
  fontFamily: string;
  at: TypographyStyle;  
  h2: TypographyStyle;
  h3: TypographyStyle;
  h3l: TypographyStyle;
  h4: TypographyStyle;
  h4l: TypographyStyle;
  h5: TypographyStyle;
  h6: TypographyStyle;
  description: TypographyStyle;
}

interface TypographyStyle {
  fontFamily: string;
  fontWeight: number;
  fontSize: string | number; 
}

// Define breakpoints using the expected format
export const BREAKPOINTS: Breakpoints = Object.freeze({
  xs: 0,        // Corresponds to mobile
  sm: 600,      // Corresponds to tablet
  md: 900,      // Corresponds to laptop
  lg: 1200,     // Corresponds to desktop
  xl: 1600,     // Corresponds to large desktop
});

// Define UI helper constants
export const UIHELPER: UIHelper = Object.freeze({
  topBarHeight: '60px',
  drawerWidth: '187px',
  drawerWidthOpen: '45px',
  baseBg: '#F9F9F9',
});

// Define typography styles
export const TYPOGRAPHIES: Typography = Object.freeze({
  fontFamily: 'Roboto',
  at: {
    fontFamily: 'Roboto', 
    fontWeight: 400,     
    fontSize: 18,
    color: '#000',
    fontStyle: 'bold',   
  },
  h2: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: '50px',
  },
  h3: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: '35px',
  },
  h3l: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '35px',
  },
  h4: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: '24px',
  },
  h4l: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    fontSize: '24px',
  },
  h5: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: '19px',
  },
  h6: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: '16px',
  },
  description: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    fontSize: '14px',
  },
});
