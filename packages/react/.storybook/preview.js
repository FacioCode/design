import * as React from "react";
import { CssBaseline, ThemeProvider } from "../src";
import { theme } from "../../mui-themes/src";
import { colorTokens, sizeTokens } from "@faciocode/styles";
import lightTheme from "./themes/light";

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

export const parameters = {
  backgrounds: {
    default: "Default",
    grid: {
      cellSize: parseInt(sizeTokens.baseSingle),
      cellAmount: parseInt(sizeTokens.baseHalf)
    },
    values: [
      {
        name: "Brand",
        value: colorTokens.backgroundBrand
      },
      {
        name: "Default",
        value: colorTokens.backgroundDefault
      },
      {
        name: "Info alert (filled)",
        value: colorTokens.backgroundAlertFilledInfo,
      },
      {
        name: "Info alert (standard)",
        value: colorTokens.backgroundAlertStandardInfo,
      },
      {
        name: "Selected",
        value: colorTokens.backgroundSelected
      },
      {
        name: "Warning alert (standard)",
        value: colorTokens.backgroundAlertStandardWarning,
      },
      {
        name: "Warning alert (warning)",
        value: colorTokens.backgroundAlertFilledWarning,
      },
    ]
  },
  docs: {
    theme: lightTheme
  }
}
