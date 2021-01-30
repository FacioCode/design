import * as React from "react";
import { PaperProps as MaterialPaperProps } from "@material-ui/core/Paper";

// eslint-disable-next-line no-magic-numbers
type PaperElevation = 0 | 1 | 2 | 4 | 6;

export interface PaperProps extends Omit<MaterialPaperProps, "css" | "elevation"> {

  /**
   * The content of the component.
   *
   * @required
   */
  children: React.ReactNode;

  /**
   * @default 0
   * @optional
   * @type "0" | 1 | 2 | 4 | 6
   */
  elevation?: PaperElevation
}
