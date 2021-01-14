import type { FunctionComponent } from "react";
import { ThemeProviderProps as MaterialThemeProviderProps } from "@material-ui/core/styles";

export interface ThemeProviderProps extends Omit<MaterialThemeProviderProps, "css" | "theme"> {

  /**
   * Defaults to Facio Light Theme.
   *
   * @optional
   */
  theme?: MaterialThemeProviderProps["theme"]
}
export type Component = FunctionComponent<ThemeProviderProps>;
