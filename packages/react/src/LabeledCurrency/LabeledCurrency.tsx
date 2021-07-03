import * as React from "react";
import { Currency } from "@components/Currency";
import { LabeledCurrencyProps } from "@components/LabeledCurrency/LabeledCurrency.types";
import { Typography } from "@components/Typography";
import clsx from "clsx";
import { useStyles } from "@components/LabeledCurrency/LabeledCurrency.styles";
import { Skeleton } from "@components/Skeleton";

/**
 * @since 10.2.0
 */
export const LabeledCurrency = React.forwardRef<unknown, LabeledCurrencyProps>(
  (props: LabeledCurrencyProps, ref: LabeledCurrencyProps["ref"]) => {
    const {
      CurrencyTypographyProps,
      "aria-label": ariaLabel,
      "aria-live": ariaLive = "off",
      children,
      className,
      code,
      gutterBottom = true,
      loading = false,
      locales,
      orientation = "horizontal",
      paragraph = true,
      role,
      value,
      variant = "bodyText1",
    } = props;

    const {
      loading: loadingClassName,
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
          aria-hidden={Boolean(ariaLabel)}
          className={loadingClassName}
          component={"span"}
          gutterBottom={false}
          paragraph={false}
          variant={"inherit"}>
          {loading && <Skeleton />}
          {!loading && children}
        </Typography>
        <Typography
          aria-label={ariaLabel} component={"span"} paragraph={false} variant={"inherit"}
          {...CurrencyTypographyProps}
        >
          {!loading && <Currency code={code} locales={locales} value={value} />}
        </Typography>
      </Typography>
    );
  });

export default LabeledCurrency;
