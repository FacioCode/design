import * as React from "react";
import { Component, ThemeProviderProps } from "./ThemeProvider.types";
import { theme as defaultTheme, strictTheme } from "@faciocode/mui-themes";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";

export const ThemeProvider : Component = (props: ThemeProviderProps) => {
  const { children, strict = false, ...otherProps } = props;

  const theme = React.useMemo(
    () => {
      if (strict) {
        return strictTheme;
      }

      return defaultTheme;
    },
    [strict],
  );

  return (
    <MaterialThemeProvider
      theme={theme}
      {...otherProps}>
      {children}
    </MaterialThemeProvider>
  );
};
