import type { FunctionComponent } from "react";
import { ThemeProviderProps as MaterialThemeProviderProps } from "@material-ui/core/styles";
import { Omit } from "@material-ui/types";

export interface ThemeProviderProps extends Omit<MaterialThemeProviderProps, "css" | "theme"> {

  /**
   *
   * If `false`, uses Facio Theme.
   * If `true`, uses Facio Strict Theme.
   *
   * @default false
   */
  strict?: boolean;

}
export type Component = FunctionComponent<ThemeProviderProps>;
