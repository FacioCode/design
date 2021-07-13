import * as React from "react";

import type { LabeledItemProps } from "./LabeledItem.types";
import { Skeleton } from "@components/Skeleton";
import { Typography } from "@components/Typography";

import clsx from "clsx";
import { useStyles } from "./LabeledItem.styles";

export type { LabeledItemProps } from "./LabeledItem.types";

type Element = HTMLParagraphElement | HTMLSpanElement;

export const LabeledItem = React.forwardRef<Element, LabeledItemProps>(
  // eslint-disable-next-line max-lines-per-function
  (props: LabeledItemProps, ref: LabeledItemProps["ref"]) => {
    const {
      LabelTypographyProps,
      "aria-label": ariaLabel,
      "aria-live": ariaLive = "off",
      children,
      className,
      color,
      gutterBottom = true,
      label,
      loading = false,
      orientation = "horizontal",
      paragraph = true,
      role,
      variant = "bodyText1",
    } = props;

    const {
      label: labelClassName,
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
          className={labelClassName}
          color={color}
          component={"span"}
          gutterBottom={false}
          paragraph={false}
          variant={"inherit"}
          {...LabelTypographyProps}
        >
          {loading && <Skeleton />}
          {!loading && label}
        </Typography>
        <Typography
          aria-label={ariaLabel}
          color={color}
          component={"span"}
          gutterBottom={false}
          paragraph={false}
          variant={"inherit"}
        >
          {!loading && children}
        </Typography>
      </Typography>
    );
  },
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  LabeledItem.displayName = "LabeledItem";
}
