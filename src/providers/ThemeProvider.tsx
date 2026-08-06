import React from 'react';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

interface IProps {
  children: React.ReactNode;
}

const theme = createTheme({
  colors: {
    indigo: [
      '#EDF2FF',
      '#DBE4FF',
      '#BAC8FF',
      '#91A7FF',
      '#748FFC',
      '#5C7CFA',
      '#4C6EF5',
      '#4C6EF5',
      '#4263EB',
      '#3B5BDB',
      '#364FC7',
    ],
  },
});

const ThemeProvider = ({ children }: IProps) => <MantineProvider theme={theme}> {children} </MantineProvider>;

export default ThemeProvider;
