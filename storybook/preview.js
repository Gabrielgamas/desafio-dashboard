// .storybook/preview.js

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Crie um tema padrão se necessário
const theme = createTheme();

const withRouter = (Story) => (
  <Router>
    <Story />
  </Router>
);

const withTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [withRouter, withTheme];
