import * as React from "react";
import { CssBaseline, ThemeProvider } from "@faciocode/react";
import { theme } from "../../mui-themes/src";

console.log(theme);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const decorators = [(Story) => <ThemeProvider theme={theme}><CssBaseline><Story /></CssBaseline></ThemeProvider>];
