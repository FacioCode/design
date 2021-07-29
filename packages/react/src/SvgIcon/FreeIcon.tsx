import * as React from "react";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconProps } from "@svg-icons/SvgIcon.types";

export const FreeIcon = React.forwardRef<unknown, SvgIconProps>(
  (props: SvgIconProps, ref: SvgIconProps["ref"]) => (
    <SvgIcon {...props} ref={ref}>
      {/* eslint-disable-next-line max-len */}
      <path fillRule="evenodd" d="M19.929 7.243a.5.5 0 0 1-.099.633l-.073.053-5.7 3.419c.161.056.325.124.49.204 1.21.59 1.953 1.678 1.953 3.305 0 1.703-.885 2.828-2.306 3.426l-.141.057c-.514.2-1.082.342-1.553.371V20.5a.5.5 0 0 1-.992.09l-.008-.09v-1.793c-1.542-.084-2.663-.572-3.33-1.489a.5.5 0 1 1 .81-.587c.52.715 1.51 1.09 3.02 1.09h.153c.082-.001.123-.002.124-.004a4.87 4.87 0 0 0 1.53-.356c1.075-.453 1.693-1.238 1.693-2.504 0-1.228-.512-1.977-1.392-2.406a3.648 3.648 0 0 0-1.01-.313 3.814 3.814 0 0 0-.312-.038l.016.001-8.045 4.828a.5.5 0 0 1-.587-.805l.073-.053 8.075-4.847a.5.5 0 0 1 .172-.102l6.753-4.05a.5.5 0 0 1 .686.17zM12 2a.5.5 0 0 1 .492.41l.008.09v1.945c1.506.088 2.939.707 3.623 1.919a.5.5 0 0 1-.87.492C13.935 4.522 8.5 5.204 8.5 7.849c0 1.188.373 1.946.988 2.402.363.269.725.382.94.402a.5.5 0 1 1-.095.996c-.38-.037-.91-.202-1.44-.595C8.02 10.407 7.5 9.351 7.5 7.85c0-2.004 1.926-3.187 4-3.386V2.5A.5.5 0 0 1 12 2z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  FreeIcon.displayName = "FreeIcon";
}
