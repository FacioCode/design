import * as React from "react";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconProps } from "./SvgIcon.types";

export const WarningIcon = React.forwardRef<unknown, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}>
      {/* eslint-disable-next-line max-len */}
      <path fillRule="evenodd" d="m12.857 3.486 9 15A1 1 0 0 1 21 20H3a1 1 0 0 1-.857-1.514l9-15a1 1 0 0 1 1.714 0zM12 4 3 19h18L12 4zm-.135 12.346c.264 0 .468.08.612.239.143.16.215.39.215.69 0 .292-.073.519-.219.68-.146.162-.348.243-.608.243a.831.831 0 0 1-.588-.215c-.155-.144-.233-.38-.233-.708 0-.62.274-.93.82-.93zm.01-8.34c.372 0 .674.302.674.674v.033l-.298 6.174a.377.377 0 0 1-.752 0l-.297-6.174a.674.674 0 0 1 .673-.707z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  WarningIcon.displayName = "WarningIcon";
}

