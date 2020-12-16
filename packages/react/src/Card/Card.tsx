import * as React from "react";
import type { CardProps } from "./Card.types";
import { Card as MaterialCard } from "@material-ui/core";

type Render = (props: CardProps, ref: CardProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialCard ref={ref} {...props} />
);

export const Card = React.forwardRef<unknown, CardProps>(render);
Card.displayName = "Card";

export default Card;
