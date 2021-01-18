import * as React from "react";
import { CssBaseline, ThemeProvider } from "../src";
import { theme } from "../../mui-themes/src";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Story />
      </CssBaseline>
    </ThemeProvider>
  ),
];
