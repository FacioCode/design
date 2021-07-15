import * as React from "react";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconProps } from "@svg-icons/SvgIcon.types";

export const SearchIcon = React.forwardRef<unknown, SvgIconProps>(
  (props: SvgIconProps, ref: SvgIconProps["ref"]) => (
    <SvgIcon {...props} ref={ref}>
      {/* eslint-disable-next-line max-len */}
      <path fillRule="evenodd" d="M13.1 4a6.5 6.5 0 1 1-4.337 11.342l-.01.012-4.8 4.8a.5.5 0 0 1-.764-.638l.057-.07 4.8-4.8.029-.023A6.5 6.5 0 0 1 13.1 4zm0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  SearchIcon.displayName = "SearchIcon";
}
