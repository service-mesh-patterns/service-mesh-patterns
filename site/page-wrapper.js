import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme/themeStyles";
import { GlobalStyle } from "./src/sections/app.style";

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme} {...props}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};