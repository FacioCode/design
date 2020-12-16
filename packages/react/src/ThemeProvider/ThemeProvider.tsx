import * as React from "react";
import { Component, ThemeProviderProps } from "./ThemeProvider.types";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";

export const ThemeProvider : Component = (props: ThemeProviderProps) => {
  const { children, theme, ...otherProps } = props;

  return <MaterialThemeProvider theme={theme} {...otherProps}>{children}</MaterialThemeProvider>;
};

export default ThemeProvider;
