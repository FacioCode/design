import * as React from "react";
import { CloseButtonProps } from "@components/Button";
import { CloseIcon } from "@svg-icons/CloseIcon";
import { IconButton } from "@components/IconButton";
import { Tooltip } from "@components/Tooltip";

type Render = (props: CloseButtonProps, ref: CloseButtonProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    SvgIconProps,
    TooltipProps,
    title,
    ...otherProps
  } = props;

  return (
    <Tooltip
      aria-label={title}
      ref={ref}
      title={title}
      {...TooltipProps}
    >
      <IconButton {...otherProps}>
        <CloseIcon color={"inherit"} {...SvgIconProps} />
      </IconButton>
    </Tooltip>
  );
};

export const CloseButton = React.forwardRef<unknown, CloseButtonProps>(render);
CloseButton.displayName = "CloseButton";

export default CloseButton;
