import React, { ReactNode } from 'react';
import { ThemeProvider as Provider, DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  mainColor: '#0FBCF9',
  subColor: '#F3FCFF',
  hoverColor: '#F5F8FA',
  navBackground: '#2A2A2A',
  headerHeight: '40px',
  zIndex: {
    loader: 6000,
    editProfile: 5500,
    update_banner: 5000,
    full_screen_modal: 4000,
    header: 3000,
    modal: 2000,
    sub_loader: 1000,
    popover: 300,
    dropdown: 100,
    draggableHeaderItem: 3500,
    above_header: 3001,
  },
  notSetColors: {
    lineColor: '#e2e2e2',
    backgroundColor: '#f5f5f5',
    backgroundColorGrey: '#fafafa',
  },

  colors: {
    // Primary colors
    primaryBlue: '#0FBCF9',
    primaryDarkGray: '#2A2A2A',
    primaryBaseGray: '#4A4A4A',

    // Secondary colors
    secondaryBaseSilver: '#9B9B9B',
    secondaryLightSilver: '#FAFAFA',

    // Extended Blue
    darkBlue: '#054257',
    darkerBlue2: '#1C6190',
    darkerBlue1: '#0EA9E0',
    pastelBlue: '#D2E6F3',
    lightBlue: '#E7F8FE',

    // Extended Silver
    lighterSilver1: '#CDCDCD',
    lighterSilver2: '#E1E1E1',
    lighterSilver3: '#EBEBEB',
    white: '#FFFFFF',

    // Extended Gray
    lighterGray: '#535353',

    // Semantic Colors
    warning: '#EFAD43',
    critical: '#DA3653',
    success: '#45AB28',
  },
};

function ThemeProvider({ children }: { children: ReactNode }) {
  return <Provider theme={defaultTheme}>{children}</Provider>;
}

export default ThemeProvider;
