import * as React from "react";
import { Component, ThemeProviderProps } from "./ThemeProvider.types";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import { theme as defaultTheme } from "@faciocode/mui-themes";

export const ThemeProvider : Component = (props: ThemeProviderProps) => {
  const { children, theme = defaultTheme, ...otherProps } = props;

  return <MaterialThemeProvider theme={theme} {...otherProps}>{children}</MaterialThemeProvider>;
};

export default ThemeProvider;
