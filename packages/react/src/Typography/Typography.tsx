import * as React from "react";
import { MaterialTypographyVariant, TypographyProps } from "./Typography.types";
import { Typography as MaterialTypography } from "@material-ui/core";
import { componentMapping } from "./componentMapping";
import { variantMapping } from "./variantMapping";

type Render = (props: TypographyProps, ref: TypographyProps["ref"]) => JSX.Element;

const defaultComponent : TypographyProps["component"] = "span";

const render: Render = (props, ref) => {
  const {
    component,
    paragraph,
    variant = "bodyText1",
    ...otherProps
  } = props;

  const mappedVariant : MaterialTypographyVariant = variantMapping[variant];

  const getComponent = () => {
    if (component) {
      return component;
    }
    if (paragraph) {
      return "p" as TypographyProps["component"];
    }
    if (componentMapping[variant]) {
      return componentMapping[variant];
    }

    return defaultComponent;
  };

  return <MaterialTypography
    component={getComponent()}
    paragraph={paragraph}
    ref={ref}
    variant={mappedVariant}
    {...otherProps}
  />;
};

export const Typography = React.forwardRef<unknown, TypographyProps>(render);
Typography.displayName = "Typography";

export default Typography;
