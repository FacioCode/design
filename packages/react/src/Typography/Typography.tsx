import * as React from "react";
import { Element, Props } from "./Typography.types";
import clsx from "clsx";
import { useStyles } from "./Typography.styles";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    children,
    className,
    component,
    paragraph = false,
    variant = "bodyText1",
    ...otherProps
  } = props;

  const variantMapping : Record<Props["variant"], string> = {
    headline1: "h1",
    headline2: "h2",
    headline3: "h3",
    headline4: "h4",
    headline5: "h5",
    subtitle1: "h6",
    subtitle2: "h6",
    // eslint-disable-next-line sort-keys
    bodyText1: "p",
    bodyText2: "p",
    caption: "figcaption",
  };

  const getComponent = () => {
    if (component) {
      return component;
    }
    if (paragraph) {
      return "p";
    }
    if (variantMapping[variant]) {
      return variantMapping[variant];
    }

    return "span";
  };

  const Component = getComponent();

  const classes = useStyles();

  return <Component
    className={clsx(classes.root, classes[variant], className)}
    ref={ref}
    {...otherProps}>
    {children}
  </Component>;
};

export const Typography = React.forwardRef<Element, Props>(render);
Typography.displayName = "Typography";

export default Typography;
