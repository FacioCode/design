import * as React from "react";
import {
  MaterialTypographyColor,
  MaterialTypographyVariant,
  TypographyProps,
} from "./Typography.types";

import { Typography as MaterialTypography } from "@material-ui/core";
import { Skeleton } from "../Skeleton";

import clsx from "clsx";
import { colorMapping } from "./colorMapping";
import { getTypographyComponent } from "./getTypographyComponent";
import { useStyles } from "./Typography.styles";
import { variantMapping } from "./variantMapping";

type Render = (props: TypographyProps, ref: TypographyProps["ref"]) => JSX.Element;

const render: Render = (props, ref) => {
  const {
    className,
    children: childrenProp,
    color = "textPrimary",
    component,
    flexGrow: flexGrowProp,
    loading,
    paragraph,
    variant = "bodyText1",
    ...otherProps
  } = props;

  const mappedColor : MaterialTypographyColor = colorMapping[color];
  const mappedVariant : MaterialTypographyVariant = variantMapping[variant];

  const { colorInverse, flexGrow } = useStyles();


  const classNames = clsx({
    [colorInverse]: color === "inverse",
    [flexGrow]: flexGrowProp === true,
    // eslint-disable-next-line sort-keys
  }, className);

  let children = childrenProp;

  if (loading) {
    children = <Skeleton />;
  }

  return <MaterialTypography
    className={classNames}
    color={mappedColor}
    component={getTypographyComponent({ component, paragraph, variant })}
    paragraph={paragraph}
    ref={ref}
    variant={mappedVariant}
    {...otherProps}
  >
    {children}
  </MaterialTypography>;
};

export const Typography = React.forwardRef<unknown, TypographyProps>(render);
Typography.displayName = "Typography";

export default Typography;
