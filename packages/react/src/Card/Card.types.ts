import { CardProps as MaterialCardProps } from "@material-ui/core";
import { Omit } from "@material-ui/types";
import { PaperProps } from "../Paper";

type OmittedProps = |
  "css" |
  "elevation" |
  "raised";

export interface CardProps extends Omit<MaterialCardProps, OmittedProps> {

  /**
   * @default false
   * @optional
   * @type boolean
   */
  outlined?: PaperProps["outlined"]

}
