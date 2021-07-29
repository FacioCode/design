import * as React from "react";
import type { TimeProps } from "./Time.types";
import { useStyles } from "./Time.styles";

export const Time = React.forwardRef((props: TimeProps, ref: TimeProps["ref"]) => {
  const {
    children,
    component: Component = "time",
    dateStyle,
    locales,
    timeStyle,
    ...otherProps
  } = props;

  const { root } = useStyles();

  if (!children) {
    return null;
  }

  const value = new Date(children);
  const options = { dateStyle, timeStyle } as Intl.DateTimeFormatOptions;
  const formatter = new Intl.DateTimeFormat(locales, options);

  return (
    <Component
      className={root}
      dateTime={value.toISOString()}
      ref={ref}
      {...otherProps}>
      {formatter.format(value)}
    </Component>
  );
});

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  Time.displayName = "Time";
}

