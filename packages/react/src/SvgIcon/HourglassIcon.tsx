import * as React from "react";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconProps } from "@svg-icons/SvgIcon.types";

export const HourglassIcon = React.forwardRef<unknown, SvgIconProps>(
  (props: SvgIconProps, ref: SvgIconProps["ref"]) => (
    <SvgIcon {...props} ref={ref}>
      {/* eslint-disable-next-line max-len */}
      <path fillRule="evenodd" d="M4.5 20.5a.5.5 0 0 1-.09-.992l.09-.008h2.012a9.006 9.006 0 0 1 .473-2.506l.018-.05a.503.503 0 0 1 .075-.213c.703-1.837 2.038-3.419 3.994-4.734-2.894-1.973-4.424-4.65-4.562-7.996L4.5 4a.5.5 0 0 1-.09-.992L4.5 3h15a.5.5 0 0 1 .09.992L19.5 4l-2.01.001c-.138 3.345-1.668 6.023-4.562 7.998 2.878 1.932 4.41 4.444 4.56 7.5l2.012.001a.5.5 0 0 1 .09.992l-.09.008h-15zm3.456-3.152-.04.016a8.013 8.013 0 0 0-.403 2.136h8.974a8.106 8.106 0 0 0-.31-1.838c-1.666.613-2.688.514-4.171-.12l-.287-.126c-1.411-.633-2.203-.72-3.763-.068zM12 12.586l.257-.157c-1.74 1.044-2.998 2.266-3.782 3.672 1.26-.367 2.189-.225 3.432.305l.276.122c1.39.624 2.178.739 3.65.197-.738-1.672-2.097-3.1-4.09-4.296l.257.157zM7.511 4.001c.146 3.234 1.716 5.742 4.747 7.57l-.258-.16.036-.022c2.839-1.812 4.312-4.26 4.453-7.388z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  HourglassIcon.displayName = "HourglassIcon";
}
