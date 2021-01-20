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
        name: "Alert info",
        value: colorTokens.backgroundAlertStandardInfo,
      },
      {
        name: "Alert warning",
        value: colorTokens.backgroundAlertStandardWarning,
      },
      {
        name: "Brand",
        value: colorTokens.backgroundBrand,
      },
      {
        name: "Default",
        value: colorTokens.backgroundDefault
      },
      {
        name: "Paper",
        value: colorTokens.backgroundPaper
      },
      {
        name: "Selected",
        value: colorTokens.backgroundSelected
      }
    ]
  },
  docs: {
    theme: lightTheme
  }
}
