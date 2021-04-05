import * as React from "react";
import { Typography, TypographyProps } from "@components/Typography";
import clsx from "clsx";
import { useStyles } from "@components/CurrencyField/CurrencyField.styles";

const render = (props: TypographyProps, ref: TypographyProps["ref"]) => {
  const { children, className } = props;

  const { endAdornment } = useStyles();

  const classNames = React.useMemo(
    () => clsx(endAdornment, className),
    [clsx, endAdornment, className],
  );

  return (
    <Typography
      aria-hidden={true}
      className={classNames}
      component={"span"}
      gutterBottom={false}
      ref={ref}
      variant={"inherit"}
    >
      {children}
    </Typography>
  );
};

export const EndAdornment = React.forwardRef<HTMLSpanElement, TypographyProps>(render);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  EndAdornment.displayName = "EndAdornment";
}
