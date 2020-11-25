import * as React from "react";
import {
  TypographyElement,
  TypographyProps,
  Typography as UnstyledTypography,
} from "@faciocode/react-unstyled";
import { useStyles } from "./Typography.styles";

export { TypographyProps } from "@faciocode/react-unstyled";

const render = (props: TypographyProps, ref: TypographyProps["ref"]) => (
  <UnstyledTypography {...props} classes={useStyles()} ref={ref} />
);

export const Typography = React.forwardRef<TypographyElement, TypographyProps>(render);
