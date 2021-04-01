import { IconButtonProps } from "@components/IconButton";
import { Omit } from "@material-ui/types";
import { SvgIconProps } from "@components/SvgIcon";
import { TooltipProps } from "@components/Tooltip";

export interface CloseButtonProps extends IconButtonProps {

  /**
   * @required
   */
  onClick: IconButtonProps["onClick"];

  /**
   * @optional
   * @type object
   */
  SvgIconProps?: Omit<SvgIconProps, "aria-label" | "css" | "color">;

  /**
   * @optional
   * @type object
   */
  TooltipProps?: Omit<TooltipProps, "aria-label" | "css" | "title">;

  /**
   * @default "Close"
   * @required
   * @type string
   */
  title: string;

}
