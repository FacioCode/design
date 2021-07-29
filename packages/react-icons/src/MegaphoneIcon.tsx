/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Megaphone Icon
 *
 * @example
 * ```jsx
 * <MegaphoneIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const MegaphoneIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M15 16.146c-1.457-.752-3.213-1.392-5.267-1.92l1.327 3.318a1.5 1.5 0 0 1-1.274 1.948l-.155.008H8.71a1.498 1.498 0 0 1-1.355-.854l-2.107-5.32-.393-.06a1 1 0 0 1-.854-.99V12H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1v-.006a1 1 0 0 1 .831-.986C9.104 7.276 12.494 6.321 15 5.145c4-1.876 4 13.068 0 11.001zm-8.602-2.631 1.839 4.65a.5.5 0 0 0 .383.327l.089.008h.922a.506.506 0 0 0 .505-.54l-.016-.078-1.566-3.91.044-.019a47.08 47.08 0 0 0-2.2-.438zm13.246.65.087.023 1.88.684a.5.5 0 0 1-.255.963l-.087-.023-1.88-.684a.5.5 0 0 1 .255-.963zm-4.22-8.114c-2.474 1.16-5.74 2.103-9.808 2.835L5 8.994v3.283l.59.09c3.883.611 7.045 1.508 9.489 2.7l.38.19c.35.182.555.068.883-.641.414-.894.658-2.344.658-3.899 0-1.557-.245-3.022-.661-3.942-.337-.745-.571-.885-.914-.724zM4 10H3v1h1v-1zm17.5 0a.5.5 0 0 1 .09.992L21.5 11h-2a.5.5 0 0 1-.09-.992L19.5 10h2zm.41-4.513a.5.5 0 0 1-.218.603l-.081.038-1.88.684a.5.5 0 0 1-.423-.902l.081-.038 1.88-.684a.5.5 0 0 1 .64.299z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  MegaphoneIcon.displayName = "MegaphoneIcon";
}
