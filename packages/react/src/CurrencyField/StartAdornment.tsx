import * as React from "react";
import { Typography, TypographyProps } from "@components/Typography";
import clsx from "clsx";
import { useStyles } from "@components/CurrencyField/CurrencyField.styles";

const render = (props: TypographyProps, ref: TypographyProps["ref"]) => {
  const {
    className,
    children = "R$",
    ...otherProps
  } = props;

  const { startAdornment } = useStyles();

  const classNames = React.useMemo(
    () => clsx(startAdornment, className),
    [clsx, startAdornment, className],
  );

  return (
    <Typography
      aria-hidden={true}
      className={classNames}
      component={"span"}
      gutterBottom={false}
      ref={ref}
      variant={"inherit"}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export const StartAdornment = React.forwardRef<HTMLSpanElement, TypographyProps>(render);
StartAdornment.displayName = "StartAdornment";
