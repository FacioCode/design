import { CardProps as MaterialCardProps } from "@material-ui/core";
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
