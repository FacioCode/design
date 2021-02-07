import * as React from "react";
import type { CardProps } from "./Card.types";
import { Card as MaterialCard } from "@material-ui/core";
import { MaterialPaperVariant } from "../Paper/Paper.types";

type Render = (props: CardProps, ref: CardProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const { outlined, ...otherProps } = props;

  let variant : MaterialPaperVariant = "elevation";

  if (outlined === true) {
    variant = "outlined";
  }

  return (
    <MaterialCard
      {...otherProps}
      ref={ref}
      variant={variant}
    />
  );
};

export const Card = React.forwardRef<unknown, CardProps>(render);
Card.displayName = "Card";

export default Card;
