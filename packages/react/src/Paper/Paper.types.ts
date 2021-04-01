import * as React from "react";
import { Omit } from "@material-ui/types";
import { PaperProps as MaterialPaperProps } from "@material-ui/core/Paper";

// eslint-disable-next-line no-magic-numbers
type PaperElevation = 0 | 1 | 2 | 4 | 6;

export type MaterialPaperVariant = MaterialPaperProps["variant"];

type OmittedProps = |
  "css" |
  "elevation" |
  "variant";

export interface PaperProps extends Omit<MaterialPaperProps, OmittedProps> {

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
  elevation?: PaperElevation;

  /**
   * @default false
   * @optional
   * @type boolean
   */
  outlined?: boolean;
}
