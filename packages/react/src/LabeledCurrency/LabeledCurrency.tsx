import * as React from "react";
import { Currency } from "@components/Currency";
import { LabeledCurrencyProps } from "@components/LabeledCurrency/LabeledCurrency.types";
import { Typography } from "@components/Typography";
import clsx from "clsx";
import { useStyles } from "@components/LabeledCurrency/LabeledCurrency.styles";

type Render = (props: LabeledCurrencyProps, ref: LabeledCurrencyProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    "aria-label": ariaLabel,
    "aria-live": ariaLive,
    className,
    children,
    code,
    currencyVariant = "inherit",
    gutterBottom = true,
    label,
    orientation = "horizontal",
    paragraph = true,
    role,
    variant = "bodyText1",
    ...otherProps
  } = props;

  const { horizontal, root, vertical } = useStyles();

  const classNames = clsx({
    [root]: Boolean(label),
    // eslint-disable-next-line sort-keys
    [horizontal]: orientation === "horizontal",
    [vertical]: orientation === "vertical",
    // eslint-disable-next-line sort-keys
    className,
  });

  return (
    <Typography
      aria-atomic={true}
      aria-live={ariaLive}
      className={classNames}
      component={"p"}
      gutterBottom={gutterBottom}
      paragraph={paragraph}
      ref={ref}
      role={role}
      variant={variant}
    >
      <Typography
        aria-hidden={Boolean(ariaLabel)}
        component={"span"}
        gutterBottom={false}
        paragraph={false}
        variant={"inherit"}>
        {label}
        <Typography component={"span"} variant={"srOnly"}>:</Typography>
      </Typography>
      <Typography
        aria-label={ariaLabel}
        component={"span"}
        paragraph={false}
        variant={currencyVariant}
      >
        <Currency code={code} {...otherProps}>{children}</Currency>
      </Typography>
    </Typography>
  );
};

export const LabeledCurrency = React.forwardRef<unknown, LabeledCurrencyProps>(render);

export default LabeledCurrency;
