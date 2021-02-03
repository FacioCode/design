import { TabsProps as MaterialTabsProps } from "@material-ui/core/Tabs";

type OmittedProps = |
  "centerRipple" |
  "css" |
  "disableRipple" |
  "disableTouchRipple" |
  "focusRipple" |
  "focusVisibleClassName" |
  "TouchRippleProps"

export type TabsProps = Omit<MaterialTabsProps, OmittedProps>;
