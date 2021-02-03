import { TabProps as MaterialTabProps } from "@material-ui/core/Tab";

type OmittedProps = |
  "css" |
  "disabledFocusRipple" |
  "disableRipple";

export type TabProps = Omit<MaterialTabProps, OmittedProps>;
