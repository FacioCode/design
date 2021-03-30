import * as React from "react";
import {CssBaseline, ThemeProvider} from "../src";
import { theme } from "../../mui-themes/src";
import { colorTokens, sizeTokens } from "@faciocode/styles";
import lightTheme from "./themes/light";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div lang={"pt-br"}>
          <Story />
        </div>
      </CssBaseline>
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: "Paper (default)",
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
        name: "Info alert (filled)",
        value: colorTokens.backgroundAlertFilledInfo,
      },
      {
        name: "Info alert (standard)",
        value: colorTokens.backgroundAlertStandardInfo,
      },
      {
        name: "Paper (default)",
        value: colorTokens.backgroundPaper,
      },
      {
        name: "Paper (shaded)",
        value: colorTokens.backgroundShadedPaper,
      },
      {
        name: "Paper (dark shaded)",
        value: colorTokens.backgroundDarkShadedPaper,
      },
      {
        name: "Selected",
        value: colorTokens.backgroundSelected
      },
      {
        name: "Table row (hovered)",
        value: colorTokens.backgroundRowHover,
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
