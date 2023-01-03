import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/styles/globals-styles";
import { theme } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
