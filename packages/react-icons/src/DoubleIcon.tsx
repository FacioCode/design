/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Double Icon
 *
 * @example
 * ```jsx
 * <DoubleIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const DoubleIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="m9.82 13.504-5.087 4.95h7.682a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.41.493l-.09.008H3.501a.5.5 0 0 1-.348-.86l4.961-4.823a357.282 357.282 0 0 0 2.074-2.033c4.368-4.345-.429-9.361-5.672-5.16a.5.5 0 0 1-.625-.78c6.143-4.923 12.167 1.264 7.157 6.49l-1.229 1.215zm5.465-.96.07.057L18 15.248l2.646-2.647a.5.5 0 0 1 .765.638l-.057.07-2.647 2.646 2.647 2.646a.5.5 0 0 1-.638.765l-.07-.058L18 16.662l-2.646 2.646a.5.5 0 0 1-.765-.638l.057-.069 2.647-2.646-2.647-2.647a.5.5 0 0 1 .562-.808l.076.043z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  DoubleIcon.displayName = "DoubleIcon";
}
