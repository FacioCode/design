import * as React from "react";
import {
  MaterialTypographyColor,
  MaterialTypographyVariant,
  TypographyProps,
} from "./Typography.types";
import { Typography as MaterialTypography } from "@material-ui/core";
import clsx from "clsx";
import { colorMapping } from "./colorMapping";
import { componentMapping } from "./componentMapping";
import { useStyles } from "./Typography.styles";
import { variantMapping } from "./variantMapping";

type Render = (props: TypographyProps, ref: TypographyProps["ref"]) => JSX.Element;

const defaultComponent : TypographyProps["component"] = "span";

const render: Render = (props, ref) => {
  const {
    className,
    color = "textPrimary",
    component,
    flexGrow: flexGrowProp,
    paragraph,
    variant = "bodyText1",
    ...otherProps
  } = props;

  const mappedColor : MaterialTypographyColor = colorMapping[color];
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

  const { colorInverse, flexGrow } = useStyles();

  const classNames = {
    [colorInverse]: color === "inverse",
    [flexGrow]: flexGrowProp === true,
    // eslint-disable-next-line sort-keys
    className,
  };

  return <MaterialTypography
    className={clsx(classNames)}
    color={mappedColor}
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
