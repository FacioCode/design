import * as React from "react";
import { Currency } from "@components/Currency";
import { LabeledCurrencyProps } from "@components/LabeledCurrency/LabeledCurrency.types";
import { Typography } from "@components/Typography";
import clsx from "clsx";
import { useStyles } from "@components/LabeledCurrency/LabeledCurrency.styles";

type Render = (props: LabeledCurrencyProps, ref: LabeledCurrencyProps["ref"]) => JSX.Element;

const render : Render = (props: LabeledCurrencyProps, ref) => {
  const {
    CurrencyProps,
    CurrencyTypographyProps,
    "aria-label": ariaLabel,
    "aria-live": ariaLive,
    children,
    className,
    gutterBottom = true,
    orientation = "horizontal",
    paragraph = true,
    role,
    value,
    variant = "bodyText1",
  } = props;

  const {
    orientationHorizontal,
    root,
    orientationVertical,
  } = useStyles();

  const classNames = clsx({
    [root]: Boolean(children),
    // eslint-disable-next-line sort-keys
    [orientationHorizontal]: orientation === "horizontal",
    [orientationVertical]: orientation === "vertical",
    // eslint-disable-next-line sort-keys
    className,
  });

  return (
    <Typography
      aria-atomic={true} aria-live={ariaLive} className={classNames} component={"p"}
      gutterBottom={gutterBottom} paragraph={paragraph} ref={ref} role={role} variant={variant}
    >
      <Typography
        aria-hidden={Boolean(ariaLabel)} component={"span"} gutterBottom={false} paragraph={false}
        variant={"inherit"}>
        {children}
      </Typography>
      <Typography
        aria-label={ariaLabel} component={"span"} paragraph={false} variant={"inherit"}
        {...CurrencyTypographyProps}
      >
        <Currency {...CurrencyProps} value={value} />
      </Typography>
    </Typography>
  );
};

/**
 * @since 10.2.0
 */
export const LabeledCurrency = React.forwardRef<unknown, LabeledCurrencyProps>(render);

export default LabeledCurrency;
