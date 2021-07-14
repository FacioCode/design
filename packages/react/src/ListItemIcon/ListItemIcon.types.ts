import { ListItemIconProps as MaterialListItemIconProps } from "@material-ui/core";

type ListItemIconColor = "default" | "error";

export interface ListItemIconProps extends MaterialListItemIconProps {

  /**
   * @default default
   * @optional
   */
  color?: ListItemIconColor;
}
