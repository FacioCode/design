import * as React from "react";
import type { TimeProps } from "./Time.types";

type Render = (props: TimeProps, ref: TimeProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    children,
    component: Component = "time",
    dateStyle,
    locales,
    timeStyle,
    ...otherProps
  } = props;

  if (!children) {
    return null;
  }

  const value = new Date(children);
  const options = { dateStyle, timeStyle } as Intl.DateTimeFormatOptions;
  const formatter = new Intl.DateTimeFormat(locales, options);

  return (
    <Component dateTime={value.toISOString()} ref={ref} {...otherProps}>
      {formatter.format(value)}
    </Component>
  );
};

export const Time = React.forwardRef(render);
Time.displayName = "Time";

export default Time;
