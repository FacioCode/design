import { Theme, ThemeOptions, createMuiTheme } from "@material-ui/core";

type CreateTheme = (options: ThemeOptions) => Theme;

export const createTheme: CreateTheme = (options: ThemeOptions) => createMuiTheme({
  ...options,
});

export default createTheme;
